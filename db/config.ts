//db\config.ts
import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config
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
		categoria: column.text(),
		modelo: column.text(),
		precioConMensaje: column.number({ optional: true }),     // ← ahora permite null
		precioSinMensaje: column.number({ optional: true }),     // ← ya estaba
		descripcion: column.text({ optional: true }),
		stock: column.boolean({ optional: true, default: true }),
		tags: column.json({ optional: true }),
	},
});
export default defineDb({
	tables: { Videos, Locations, Repuestos },
});
