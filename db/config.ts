// db/config.ts
import { column, defineDb, defineTable } from "astro:db";

const Videos = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
		link: column.text(),
		published: column.text(),
		viewTime: column.text(),
		tags: column.json(),
	},
});

const Locations = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		coords: column.json(),
		name: column.text(),
	},
});

const Repuestos = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		deviceType: column.text({ default: "iphone" }),       // "iphone" | "samsung" | etc.
		familia: column.text(),                                // "iphone-12" → primer select
		categoria: column.text(),                              // "pantalla" | "bateria"
		modelo: column.text(),                                 // "iphone-12-pro" → segundo select
		precioConMensaje: column.number({ optional: true }),
		precioSinMensaje: column.number({ optional: true }),
		descripcion: column.text({ optional: true }),
		stock: column.boolean({ optional: true, default: true }),
		imageUrl: column.text({ optional: true }),             // URL S3 de la foto
		tags: column.json({ optional: true }),
		// ── NUEVOS CAMPOS ──────────────────────────────────
		calidad: column.text({ optional: true, default: "original" }),
		// "original" | "premium" | "estandar"
		// "original"  → pieza de desguace Apple original
		// "premium"   → aftermarket alta calidad
		// "estandar"  → aftermarket económico
		garantiaDias: column.number({ optional: true, default: 90 }),
		// Días de garantía por defecto de fabricación
	},
});

export default defineDb({
	tables: { Videos, Locations, Repuestos },
});