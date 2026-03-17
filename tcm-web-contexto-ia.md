# Contexto del proyecto tcm-web

**Stack:** Astro + Astro DB + TailwindCSS + React + TypeScript  
**Sitio:** TeamCellMania — reparación y venta de celulares (Ecuador)

---

## Estructura relevante

```
tcm-web/
├── db/
│   ├── config.ts       ← definición de tablas
│   └── seed.ts         ← datos iniciales
├── src/
│   ├── components/     ← .astro / .tsx
│   ├── pages/          ← rutas
│   ├── types.ts        ← tipos globales
│   └── config.ts       ← constantes (SITE_TITLE, STOREPAGE_URL…)
```

---

## Patrones de código Astro que uso

```astro
---
// Consultar DB en una página
import { db, Repuestos } from "astro:db";
const todos = await db.select().from(Repuestos);
---
```

```typescript
// Endpoint API interno (src/pages/algo.json.ts)
import { db, Videos } from "astro:db";
import type { APIRoute } from 'astro';
export const GET: APIRoute = async () => {
  const data = await db.select().from(Videos);
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};
```

```astro
---
// Rutas dinámicas estáticas
export async function getStaticPaths() {
  const todos = await db.select().from(Repuestos);
  return todos.map(r => ({ params: { slug: r.id } }));
}
---
```

```typescript
// ⚠️ column.json() devuelve `unknown` — siempre castear:
.map(r => ({ ...r, tags: r.tags as string[] | null }))
```

---

## Tabla principal: `Repuestos`

| Campo | Tipo | Notas |
|---|---|---|
| `id` | text PK | ej: `rep-pantalla-iphone-12-pro` |
| `deviceType` | text | `"iphone"` |
| `familia` | text | ej: `"iphone-12"` (agrupa variantes) |
| `categoria` | text | `"pantalla"` \| `"bateria"` |
| `modelo` | text | ej: `"iphone-12-pro"` |
| `precioSinMensaje` | number? | sin chip anti-mensaje → más barato |
| `precioConMensaje` | number? | con chip → más caro → recomendado |
| `stock` | boolean | default `true` |
| `imageUrl` | text? | URL S3 |
| `tags` | json? | `string[]` |

---

## Tipo TypeScript `Repuesto`

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
  tags?: string[] | null;
};
```

---

## Imágenes de repuestos (S3)

```
https://teamcellmania-public.s3.us-east-1.amazonaws.com/TCM-web/repuestos-cotizacion/apple-iphone-{modelo}-new-1.jpg
```

---

## astro.config.mjs (resumen)

```javascript
integrations: [tailwind(), react(), db()]
image.domains: ["teamcellmania-public.s3.us-east-1.amazonaws.com"]
```
