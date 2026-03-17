# tcm-web — Documentación del Proyecto

> **TeamCellMania** — Sitio web de reparación y venta de celulares en Azogues y Biblián, Ecuador.
> Stack: Astro + Astro DB + TailwindCSS + React + TypeScript

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Base de datos — Astro DB](#2-base-de-datos--astro-db)
3. [Tipos TypeScript](#3-tipos-typescript)
4. [Páginas y rutas](#4-páginas-y-rutas)
5. [Componentes clave](#5-componentes-clave)
6. [Assets y media](#6-assets-y-media)
7. [Configuración](#7-configuración)
8. [Patrones de código](#8-patrones-de-código)
9. [Features implementadas](#9-features-implementadas)
10. [Pendientes / ideas futuras](#10-pendientes--ideas-futuras)

---

## 1. Estructura del proyecto

```
tcm-web/
├── db/
│   ├── config.ts         ← Definición de tablas Astro DB
│   └── seed.ts           ← Datos iniciales (videos, ubicaciones, repuestos)
├── src/
│   ├── components/       ← Componentes reutilizables (.astro / .tsx / .jsx)
│   ├── content/
│   │   └── blog/         ← Artículos en Markdown (.md)
│   ├── layouts/          ← Layouts de página
│   ├── pages/            ← Rutas del sitio
│   ├── styles/           ← CSS global
│   ├── utils/            ← Funciones utilitarias
│   ├── config.ts         ← Constantes globales (SITE_TITLE, STOREPAGE_URL, etc.)
│   ├── types.ts          ← Tipos TypeScript globales
│   └── env.d.ts
├── public/               ← Archivos estáticos (imágenes locales, favicon)
├── astro.config.mjs      ← Configuración de Astro
├── tailwind.config.mjs
└── package.json
```

---

## 2. Base de datos — Astro DB

Archivo: `db/config.ts`

### Tabla: `Videos`

| Columna      | Tipo        | Notas                        |
|-------------|-------------|------------------------------|
| `id`        | text (PK)   | ID de YouTube (ej: `WbcR9c7fI-4`) |
| `title`     | text        |                              |
| `description` | text      |                              |
| `link`      | text        | URL completa de YouTube      |
| `published` | text        | Fecha como string (ej: `Mar 15 2023`) |
| `viewTime`  | text        | Duración (ej: `02:30`)       |
| `tags`      | json        | `string[]`                   |

### Tabla: `Locations`

| Columna  | Tipo      | Notas                              |
|---------|-----------|------------------------------------|
| `id`    | text (PK) | UUID                               |
| `coords`| json      | `{ lat: number, lng: number }`     |
| `name`  | text      | Nombre de sucursal                 |

Sucursales actuales: **Matovelle**, **Principal**, **Bolivar**, **Biblian**

### Tabla: `Repuestos`

| Columna            | Tipo             | Notas                                            |
|-------------------|------------------|--------------------------------------------------|
| `id`              | text (PK)        | Ej: `rep-pantalla-iphone-12-pro`                 |
| `deviceType`      | text             | `"iphone"` (futuro: `"samsung"`, `"huawei"`)     |
| `familia`         | text             | Primer select UI (ej: `"iphone-12"`)             |
| `categoria`       | text             | `"pantalla"` \| `"bateria"`                      |
| `modelo`          | text             | Segundo select UI (ej: `"iphone-12-pro"`)        |
| `precioSinMensaje`| number (opcional)| **Sin advertencia iOS** — incluye chip — **más caro** — **RECOMENDADO** |
| `precioConMensaje`| number (opcional)| **Con advertencia iOS** — sin chip — más barato  |
| `descripcion`     | text (opcional)  |                                                  |
| `stock`           | boolean          | Default `true`                                   |
| `imageUrl`        | text (opcional)  | URL S3 de la foto del dispositivo                |
| `tags`            | json (opcional)  | `string[]`                                       |

> ⚠️ **Importante sobre los precios:**
> - `precioSinMensaje` = sin aviso de iOS = incluye chip anti-mensaje = **precio mayor** = opción recomendada
> - `precioConMensaje` = aparece aviso en iOS = sin chip = **precio menor**
> - Los nombres pueden ser confusos: "sin mensaje" se refiere al resultado final (sin aviso), no a que no lleva chip

### Convención de IDs en Repuestos

```
rep-{categoria}-{modelo}
rep-pantalla-iphone-12-pro
rep-bateria-iphone-11
rep-pantalla-iphone-x-oled    ← variante OLED del mismo modelo
```

### Convención de familia vs modelo

```
familia: "iphone-12"    → agrupa: iphone-12, iphone-12-pro, iphone-12-pro-max, iphone-12-mini
modelo:  "iphone-12-pro" → repuesto específico
```

Los modelos OLED (`iphone-x-oled`) **comparten `imageUrl`** con su modelo base (`iphone-x`).

---

## 3. Tipos TypeScript

Archivo: `src/types.ts`

```typescript
export type Repuesto = {
  id: string;
  deviceType: string;
  familia: string;
  categoria: string;
  modelo: string;
  precioConMensaje: number | null;
  precioSinMensaje: number | null;
  descripcion?: string | null;
  stock?: boolean | null;
  imageUrl?: string | null;
  tags?: string[] | null;    // ← castear desde `unknown` al leer de DB
};

export type VideoYoutube = {
  id: string;
  title: string;
  description: string;
  link: string;
  published: string;
  viewTime: string;
  tags: string[];
};

export type Product = { ... }  // Shopify product type
```

> ⚠️ **Importante:** `column.json()` en Astro DB devuelve `unknown`.
> Al pasar repuestos a componentes, castear el campo `tags`:
> ```typescript
> .map((r) => ({ ...r, tags: r.tags as string[] | null | undefined }))
> ```

---

## 4. Páginas y rutas

### Estructura de `src/pages/`

```
pages/
├── index.astro                     → /
├── sucursales.astro                → /sucursales
├── social.astro                    → /social
├── trabajaConNosotros.astro        → /trabajaConNosotros
├── politica-cookies.md             → /politica-cookies
├── politica-privacidad.md          → /politica-privacidad
├── terminos-condiciones.md         → /terminos-condiciones
├── 404.astro
│
├── repuestos/
│   └── [...slug].astro             → /repuestos, /repuestos/iphone-12, /repuestos/iphone-12/iphone-12-pro
│
├── contenido/
│   ├── index.astro                 → /contenido
│   ├── [slug].astro                → /contenido/:slug
│   ├── articulos/
│   │   ├── index.astro             → /contenido/articulos
│   │   └── [slug].astro            → /contenido/articulos/:slug
│   └── videos/
│       ├── index.astro             → /contenido/videos
│       └── [slug].astro            → /contenido/videos/:slug
│
├── stories/
│   ├── index.astro                 → /stories
│   └── [slug].astro                → /stories/:slug
│
├── videos.json.ts                  → GET /videos.json (API interna)
├── locations.json.ts               → GET /locations.json
└── products.json.ts                → POST /products.json (Shopify)
```

### Ruta de Repuestos — `/repuestos/[...slug].astro`

Rutas pre-generadas en `getStaticPaths()`:

| URL | Qué muestra |
|-----|-------------|
| `/repuestos` | Selectores vacíos, estado vacío |
| `/repuestos/iphone-12` | Select 2 habilitado, sin precios |
| `/repuestos/iphone-12/iphone-12-pro` | Foto + tabla de pantalla + tabla de batería |

**Props que pasa a `RepuestosPricing`:**

```typescript
familiaActiva: string | null       // "iphone-12" | null
modeloActivo: string | null        // "iphone-12-pro" | null
todasFamilias: string[]            // ordenadas de más nuevo a más viejo
modelosDeFamilia: string[]         // modelos base (sin -oled) de la familia
repuestosDelModelo: Repuesto[]     // incluye variante OLED automáticamente
imagenDelModelo: string | null     // imageUrl del primer repuesto del modelo
```

**Orden de familias** (definido en la página):
```typescript
const ORDEN_FAMILIAS = [
  "iphone-17","iphone-16","iphone-15","iphone-14","iphone-13",
  "iphone-12","iphone-11","iphone-xs","iphone-xr","iphone-x",
  "iphone-se","iphone-7","iphone-6","iphone-5","iphone-4",
];
```

---

## 5. Componentes clave

### `RepuestosPricing.astro`

Componente principal de la página de precios. **Sin JavaScript de framework** (solo `<script>` vanilla).

**Lógica interna:**
```typescript
pantallas        = repuestosDelModelo.filter(r => r.categoria === "pantalla")
baterias         = repuestosDelModelo.filter(r => r.categoria === "bateria")
pantallaEstandar = pantallas.filter(r => !r.modelo.endsWith("-oled"))
pantallaOled     = pantallas.filter(r => r.modelo.endsWith("-oled"))
```

**Lógica de precios en UI:**
- Primero muestra `precioSinMensaje` → badge "✓ Recomendado" (azul)
- Después muestra `precioConMensaje` → badge "⚠ Aparece aviso" (ámbar)

**WhatsApp:**
```typescript
const WA_NUMBER = "593969010178";
const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(...)}`
```

**Secciones del componente:**
1. Título "Selecciona tu iPhone"
2. Selectores paso 1 (familia) y paso 2 (variante)
3. Link "¿No sabes tu modelo?" → support.apple.com
4. Estado vacío (si no hay modelo)
5. Card con foto del modelo
6. Tarjeta de Pantalla con opciones
7. Tarjeta de Batería con opciones
8. Sección explicativa chip anti-mensaje
9. FAQ accordion (5 preguntas)
10. CTA final: WhatsApp + Llamar

### `Store.astro`

Muestra productos de Shopify via `POST /products.json`. Tiene imagen local del negocio + productos destacados hardcodeados + grid dinámico de nuevos productos.

### `Services.astro`

Sección de servicios. Contenido estático.

### `Slider.tsx`

Componente React con `client:load`. Slider principal del hero.

### `CarouselSucursales.tsx`

Carousel de sucursales con mapa integrado.

### `Map.tsx` / `Locations.tsx`

Usa las ubicaciones de la tabla `Locations`.

---

## 6. Assets y media

### S3 Bucket público

```
https://teamcellmania-public.s3.us-east-1.amazonaws.com/TCM-web/
```

**Imágenes de repuestos:**
```
.../repuestos-cotizacion/apple-iphone-{modelo}-new-1.jpg
```

Ejemplos:
```
apple-iphone-x-new-1.jpg
apple-iphone-12-pro-new-1.jpg
apple-iphone-15-pro-max-new-1.jpg
```

> Imágenes descargadas de GSMArena.com. Crédito mostrado en el componente:
> *"Imagen cortesía de GSMArena.com · Todos los derechos reservados a sus respectivos propietarios."*

### Imágenes locales (`/public/images/`)

```
public/images/
├── teamcellmania.webp     ← foto del negocio (usada en Store)
├── social-preview.jpg     ← OG image
├── logo.jpg
└── products/
    ├── traductor.webp
    └── 1.webp
```

---

## 7. Configuración

### `astro.config.mjs`

```javascript
export default defineConfig({
  integrations: [tailwind(), react(), db()],
  image: {
    service: squooshImageService(),
    domains: ["teamcellmania-public.s3.us-east-1.amazonaws.com"],  // S3
  },
  markdown: { ... }
});
```

> El dominio S3 está en `image.domains` para que Astro permita optimizar imágenes externas con `<Image />`.
> Las imágenes de repuestos usan `<img>` nativo (no `<Image />`), por lo que no es estrictamente necesario,
> pero es buena práctica tenerlo.

### `src/config.ts`

Contiene constantes globales:
- `SITE_TITLE`
- `SITE_DESCRIPTION`
- `STOREPAGE_URL` → URL de la tienda Shopify

---

## 8. Patrones de código

### Consultar Astro DB en una página

```astro
---
import { db, Repuestos } from "astro:db";
const todos = await db.select().from(Repuestos);
---
```

### Endpoint API interno

```typescript
// src/pages/videos.json.ts
import { db, Videos } from "astro:db";
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const videos = await db.select().from(Videos);
  return new Response(JSON.stringify(videos), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
```

### Consumir endpoint desde componente o página

```astro
---
import { GET } from "./videos.json";
let videos = await GET(Astro);
const result = await videos.json();
---
```

### Rutas dinámicas estáticas (SSG)

```astro
---
export async function getStaticPaths() {
  const todos = await db.select().from(Repuestos);
  // generar paths...
  return paths; // [{ params: { slug: "iphone-12" } }, ...]
}

const { slug } = Astro.params;
---
```

### Función `labelModelo` (string → label legible)

```typescript
function labelModelo(m: string): string {
  return m.split("-").map((w) =>
    w === "iphone" ? "iPhone" : w === "pro" ? "Pro" : w === "max" ? "Max" :
    w === "mini" ? "mini" : w === "plus" ? "Plus" : w === "oled" ? "OLED" :
    w === "se" ? "SE" : w === "xs" ? "Xs" : w === "xr" ? "Xr" :
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join(" ");
}
// "iphone-12-pro-max" → "iPhone 12 Pro Max"
```

---

## 9. Features implementadas

| Feature | Ruta | Archivo(s) |
|---------|------|------------|
| Home | `/` | `src/pages/index.astro` |
| Artículos del blog | `/contenido/articulos` | `src/content/blog/*.md` |
| Videos YouTube | `/contenido/videos` | `db/seed.ts` → `Videos` |
| Tienda Shopify | (externo) | `src/utils/shopify.ts` |
| Mapa de sucursales | `/sucursales` | `db/seed.ts` → `Locations` |
| **Precios de repuestos** | `/repuestos/...` | `src/pages/repuestos/[...slug].astro` + `src/components/RepuestosPricing.astro` |

---

## 10. Pendientes / ideas futuras

### Agregar Samsung / Huawei a repuestos

1. Agregar registros en `db/seed.ts` con `deviceType: "samsung"`
2. Subir imágenes al S3 con nomenclatura:
   ```
   samsung-galaxy-s23-ultra-new-1.jpg
   ```
3. En `repuestos/[...slug].astro`, el routing ya funciona — solo hay que actualizar el primer select para que muestre los deviceTypes disponibles si se quiere separar por marca

### Agregar búsqueda de modelos

- Reemplazar el `<select>` de variante por un `<input>` con datalist o combobox
- Requeriría cambiar el componente de Astro a React (`.tsx`) con `client:load`

### Agregar más preguntas al FAQ

Editar directamente en `RepuestosPricing.astro` — los `<details>` están en la sección FAQ.

### Agregar garantía visible por repuesto

- Agregar columna `garantiaDias: number` a la tabla `Repuestos`
- Actualizar seed y mostrar en la tarjeta de precio

### Más tipos de repuesto (cámara, pin de carga, etc.)

La tabla `Repuestos` ya tiene `categoria: text` — solo agregar nuevos valores
y actualizar el componente para manejar las nuevas categorías visualmente.

---

## Contacto y redes

| Canal | Dato |
|-------|------|
| WhatsApp | +593 969 010 178 |
| Teléfono | +593 963 644 323 |
| Email | teamcellmania@gmail.com |
| Web | https://www.teamcellmania.com |
| Facebook | /teamcellmania |
| Instagram | /teamcellmania |

---

*Documentación generada en marzo 2026.*
