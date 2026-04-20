import { useState, useEffect } from "react";

// ── Tipos ──────────────────────────────────────────────────────────────────

type Attachment = {
  file_name: string;
  file_url: string;
  file_type: string;
};

type Warranty = {
  description: string;
  warranty_days: number;
  issued_at: string;
  expires_at: string;
  is_active: boolean;
  days_remaining: number;
  performed_by: { name: string };
  attachments: Attachment[];
  order: {
    order_number: number;
    status: string;
    company: { name: string };
  };
};

type DeviceInfo = {
  model: string;
  type: string;
  color: string;
  storage: string;
  all_imeis: string[];
};

type WarrantyResponse = {
  imei: string;
  device: DeviceInfo;
  has_active_warranty: boolean;
  warranties: Warranty[];
};

type CachedEntry = {
  data: WarrantyResponse;
  cachedAt: number;
  nextAllowedAt: number;
};

// ── Constantes ─────────────────────────────────────────────────────────────

const BASE_URL = import.meta.env.PUBLIC_BACKEND_URL ?? "";
const ENDPOINT = "/orders/warranty/check";
const CACHE_NAME = "tcm-warranties-v1";
const LS_PREFIX = "tcm_warranty_";
const MAX_CACHE_DAYS = 30;

// ── Helpers de caché ───────────────────────────────────────────────────────

const lsKey = (imei: string) => `${LS_PREFIX}${imei}`;

// Clave estable para imágenes — no depende de la URL de S3 que expira
const imgCacheKey = (fileName: string) =>
  `/tcm-cache/img/${encodeURIComponent(fileName)}`;

function calcNextAllowed(warranties: Warranty[]): number {
  const activas = warranties.filter((w) => w.is_active);
  if (activas.length === 0) return Date.now(); // todas vencidas → siempre permite
  const minDias = Math.min(...activas.map((w) => w.days_remaining));
  const dias = Math.min(minDias, MAX_CACHE_DAYS);
  return Date.now() + dias * 24 * 60 * 60 * 1000;
}

function readCache(imei: string): CachedEntry | null {
  try {
    const raw = localStorage.getItem(lsKey(imei));
    if (!raw) return null;
    return JSON.parse(raw) as CachedEntry;
  } catch {
    return null;
  }
}

function writeCache(imei: string, data: WarrantyResponse): CachedEntry {
  const entry: CachedEntry = {
    data,
    cachedAt: Date.now(),
    nextAllowedAt: calcNextAllowed(data.warranties),
  };
  localStorage.setItem(lsKey(imei), JSON.stringify(entry));
  return entry;
}

// Descarga y guarda imágenes/archivos en Cache API (en background)
async function cacheFiles(warranties: Warranty[]) {
  if (!("caches" in window)) return;
  const cache = await caches.open(CACHE_NAME);
  for (const w of warranties) {
    for (const att of w.attachments) {
      const key = imgCacheKey(att.file_name);
      const existing = await cache.match(key);
      if (!existing) {
        try {
          const res = await fetch(att.file_url);
          if (res.ok) await cache.put(key, res);
        } catch {
          // ignorar silenciosamente — la URL original servirá de fallback
        }
      }
    }
  }
}

// ── Componente imagen con caché ────────────────────────────────────────────

function CachedImage({
  att,
  className,
}: {
  att: Attachment;
  className?: string;
}) {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    let objectUrl = "";
    async function load() {
      if ("caches" in window) {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(imgCacheKey(att.file_name));
        if (cached) {
          const blob = await cached.blob();
          objectUrl = URL.createObjectURL(blob);
          setSrc(objectUrl);
          return;
        }
      }
      // Fallback: URL original de S3
      setSrc(att.file_url);
    }
    load();
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [att.file_name, att.file_url]);

  if (!src)
    return (
      <div className="w-full h-full bg-gray-100 animate-pulse rounded-xl" />
    );
  return <img src={src} alt={att.file_name} className={className} />;
}

// ── Helpers de UI ──────────────────────────────────────────────────────────

function formatFecha(iso: string) {
  return new Date(iso).toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatRelativo(ts: number) {
  const dias = Math.ceil((ts - Date.now()) / (1000 * 60 * 60 * 24));
  if (dias <= 0) return "disponible ahora";
  if (dias === 1) return "mañana";
  return `en ${dias} día${dias !== 1 ? "s" : ""}`;
}

function labelStatus(status: string) {
  const map: Record<string, string> = {
    TRABAJO_FINALIZADO: "Trabajo finalizado",
    EN_PROCESO: "En proceso",
    PENDIENTE: "Pendiente",
    CANCELADO: "Cancelado",
  };
  return map[status] ?? status;
}

// ── Componente principal ───────────────────────────────────────────────────

export default function GarantiasChecker() {
  const [imei, setImei] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<WarrantyResponse | null>(null);
  const [searched, setSearched] = useState(false);
  const [fromCache, setFromCache] = useState(false);
  const [cacheInfo, setCacheInfo] = useState<{
    cachedAt: number;
    nextAllowedAt: number;
  } | null>(null);
  const [lightboxAtt, setLightboxAtt] = useState<Attachment | null>(null);

  const isValidImei = imei.length === 15 && /^\d+$/.test(imei);

  async function handleSearch() {
    if (!isValidImei) return;
    setLoading(true);
    setError(null);
    setData(null);
    setSearched(true);
    setFromCache(false);
    setCacheInfo(null);

    try {
      // 1 — Revisar caché local
      const cached = readCache(imei);
      if (cached && Date.now() < cached.nextAllowedAt) {
        setData(cached.data);
        setFromCache(true);
        setCacheInfo({ cachedAt: cached.cachedAt, nextAllowedAt: cached.nextAllowedAt });
        return;
      }

      // 2 — Consultar backend
     const res = await fetch(`${BASE_URL}${ENDPOINT}/${imei}`);
      if (res.status === 404) return;
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const json: WarrantyResponse = await res.json();

      // 3 — Guardar JSON en localStorage
      const entry = writeCache(imei, json);
      setCacheInfo({ cachedAt: entry.cachedAt, nextAllowedAt: entry.nextAllowedAt });

      // 4 — Cachear imágenes en background (no bloquea la UI)
      cacheFiles(json.warranties);

      setData(json);
    } catch {
      setError(
        "No se pudo consultar el servidor. Verifica tu conexión e intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">

      {/* ── Buscador ── */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Ingresa el IMEI de tu dispositivo
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            inputMode="numeric"
            maxLength={15}
            placeholder="ej: 357654321098765"
            value={imei}
            onChange={(e) => setImei(e.target.value.replace(/\D/g, ""))}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <button
            onClick={handleSearch}
            disabled={!isValidImei || loading}
            className="bg-blue-700 hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed
                       text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 min-w-[90px]"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </span>
            ) : (
              "Buscar"
            )}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          El IMEI tiene 15 dígitos. Márcalo con{" "}
          <strong>*#06#</strong> en tu dispositivo.
        </p>
        {imei.length > 0 && !isValidImei && (
          <p className="text-xs text-red-500 mt-1">
            El IMEI debe tener exactamente 15 dígitos numéricos.
          </p>
        )}
      </div>

      {/* ── Banner caché ── */}
      {cacheInfo && (
        <div
          className={`rounded-xl px-4 py-3 mb-4 text-xs font-medium flex items-center justify-between
          ${fromCache
            ? "bg-blue-50 text-blue-700 border border-blue-100"
            : "bg-green-50 text-green-700 border border-green-100"}`}
        >
          <span>
            {fromCache
              ? `📦 Datos desde caché local · guardado el ${formatFecha(new Date(cacheInfo.cachedAt).toISOString())}`
              : "✅ Datos actualizados desde el servidor"}
          </span>
          <span className="ml-3 whitespace-nowrap opacity-75">
            Próxima consulta {formatRelativo(cacheInfo.nextAllowedAt)}
          </span>
        </div>
      )}

      {/* ── Error ── */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm mb-4">
          ⚠ {error}
        </div>
      )}

      {/* ── Sin resultados ── */}
      {!loading && searched && !data && !error && (
        <div className="text-center py-12">
          <p className="text-lg font-semibold text-gray-700">
            Sin garantías registradas
          </p>
          <p className="text-sm text-gray-400 mt-1">
            No encontramos reparaciones asociadas a este IMEI.
          </p>
        </div>
      )}

      {/* ── Resultados ── */}
      {data && (
        <div className="flex flex-col gap-5">

          {/* Info del dispositivo */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-900 text-lg">
                {data.device.model}
              </h2>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border
                ${data.has_active_warranty
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-gray-100 text-gray-500 border-gray-200"}`}
              >
                {data.has_active_warranty
                  ? "✓ Garantía activa"
                  : "Sin garantía activa"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-gray-400 text-xs">Tipo</p>
                <p className="font-medium text-gray-700 capitalize">
                  {data.device.type}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Color</p>
                <p className="font-medium text-gray-700">{data.device.color}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Almacenamiento</p>
                <p className="font-medium text-gray-700">
                  {data.device.storage}
                </p>
              </div>
            </div>
          </div>

          {/* Contador */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">
            {data.warranties.length} garantía
            {data.warranties.length !== 1 ? "s" : ""} encontrada
            {data.warranties.length !== 1 ? "s" : ""}
          </p>

          {/* Tarjetas */}
          {data.warranties.map((w, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Header */}
              <div className="px-5 pt-5 pb-4 border-b border-gray-50">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="text-gray-800 font-semibold text-sm leading-snug flex-1">
                    {w.description}
                  </p>
                  <span
                    className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full border
                    ${w.is_active
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-600 border-red-200"}`}
                  >
                    {w.is_active ? "Activa" : "Vencida"}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Orden #{w.order.order_number} · {w.order.company.name}
                </p>
              </div>

              {/* Detalles */}
              <div className="px-5 py-4 grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                <div>
                  <p className="text-gray-400 text-xs">Emitida</p>
                  <p className="font-medium text-gray-700">
                    {formatFecha(w.issued_at)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Vence</p>
                  <p className="font-medium text-gray-700">
                    {formatFecha(w.expires_at)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Técnico</p>
                  <p className="font-medium text-gray-700">
                    {w.performed_by.name}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Estado orden</p>
                  <p className="font-medium text-gray-700">
                    {labelStatus(w.order.status)}
                  </p>
                </div>
              </div>

              {/* Días restantes */}
              {w.is_active && (
                <div
                  className={`mx-5 mb-4 text-xs font-semibold rounded-lg px-3 py-2
                  ${w.days_remaining > 60
                    ? "bg-green-50 text-green-700"
                    : w.days_remaining > 0
                    ? "bg-amber-50 text-amber-700"
                    : "bg-red-50 text-red-600"}`}
                >
                  ⏱ {w.days_remaining} días restantes de {w.warranty_days} días
                  de garantía
                </div>
              )}

              {/* Adjuntos */}
              {w.attachments.length > 0 && (
                <div className="px-5 pb-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Evidencia ({w.attachments.length})
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {w.attachments.map((att, j) =>
                      att.file_type.startsWith("image/") ? (
                        <button
                          key={j}
                          onClick={() => setLightboxAtt(att)}
                          className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200
                                     hover:border-blue-400 transition hover:scale-105 focus:outline-none"
                        >
                          <CachedImage
                            att={att}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ) : (
                        
                        <a  key={j}
                          href={att.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-blue-600 hover:underline
                                     border border-blue-100 rounded-lg px-3 py-2 bg-blue-50"
                        >
                          📎 {att.file_name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightboxAtt && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxAtt(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxAtt(null)}
              className="absolute -top-10 right-0 text-white text-sm font-medium hover:text-gray-300"
            >
              ✕ Cerrar
            </button>
            <CachedImage
              att={lightboxAtt}
              className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}