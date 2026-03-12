// db/seed.ts
import { Videos, Locations, db, Repuestos } from "astro:db";

const S3 = "https://teamcellmania-public.s3.us-east-1.amazonaws.com/TCM-web/repuestos-cotizacion";
const img = (name: string) => `${S3}/${name}`;

// Imágenes por modelo base (los OLED comparten imagen con su base)
const IMGS: Record<string, string> = {
	"iphone-4s": img("apple-iphone-4s-all-sides.jpg"),
	"iphone-5s": img("gsmarena_003.jpg"),
	"iphone-6": img("apple-iphone-6-1.jpg"),
	"iphone-6s": img("apple-iphone-6s-2.jpg"),
	"iphone-6-plus": img("apple-iphone6s-plus-1.jpg"),
	"iphone-7": img("apple-iphone-7-1.jpg"),
	"iphone-se-2020": img("apple-iphone-se-2020-2.jpg"),
	"iphone-x": img("apple-iphone-x-new-1.jpg"),
	"iphone-xs": img("apple-iphone-xs-new.jpg"),
	"iphone-xr": img("apple-iphone-xr-new.jpg"),
	"iphone-xs-max": img("apple-iphone-xs-max-new.jpg"),
	"iphone-11": img("apple-iphone-11.jpg"),
	"iphone-11-pro": img("apple-iphone-11-pro.jpg"),
	"iphone-11-pro-max": img("apple-iphone-11-pro-max-.jpg"),
	"iphone-12": img("apple-iphone-12.jpg"),
	"iphone-12-mini": img("apple-iphone-12-mini.jpg"),
	"iphone-12-pro": img("apple-iphone-12-pro--.jpg"),
	"iphone-12-pro-max": img("apple-iphone-12-pro-max-.jpg"),
	"iphone-13": img("apple-iphone-13.jpg"),
	"iphone-13-mini": img("apple-iphone-13-mini.jpg"),
	"iphone-13-pro": img("apple-iphone-13-pro.jpg"),
	"iphone-13-pro-max": img("apple-iphone-13-pro-max.jpg"),
	"iphone-14": img("apple-iphone-14.jpg"),
	"iphone-14-pro": img("apple-iphone-14-pro.jpg"),
	"iphone-14-pro-max": img("apple-iphone-14-pro-max-.jpg"),
	"iphone-15-pro": img("apple-iphone-15-pro.jpg"),
	"iphone-15-pro-max": img("apple-iphone-15-pro-max.jpg"),
	"iphone-16-pro-max": img("apple-iphone-16-pro-max.jpg"),
	"iphone-17-pro": img("apple-iphone-17-pro.jpg"),
};

export default async function seed() {
	await db.insert(Videos).values([
		{ id: "WbcR9c7fI-4", title: "SAMSUNG A12 cambio de GLASS", description: "", link: "https://youtu.be/WbcR9c7fI-4", published: "Mar 15 2023", viewTime: "02:30", tags: ["hola", "reparación"] },
		{ id: "ZgVzy7VhDmg", title: "Publicidad Mando", description: "", link: "https://youtu.be/ZgVzy7VhDmg", published: "Mar 7, 2023", viewTime: "00:30", tags: ["educacion", "reparación"] },
		{ id: "tdwLM0vPQAI", title: "IPHONE 12 PRO MAX!!! CAMBIO DE LENTE DE CÁMARA..!!!", description: "", link: "https://youtu.be/tdwLM0vPQAI", published: "Feb 25 2023", viewTime: "03:11", tags: ["educacion", "reparación"] },
		{ id: "qYTHmRiwrqI", title: "iPhone 12 Pro Max..!! CAMBIO de TAPA", description: "", link: "https://youtu.be/qYTHmRiwrqI", published: "Mar 4 2023", viewTime: "08:03", tags: ["educacion", "reparación"] },
		{ id: "HL8d82fDpyM", title: "iPhone 11 Pro Max..!! CAMBIO de TAPA", description: "", link: "https://youtu.be/HL8d82fDpyM", published: "Feb 18, 2023", viewTime: "03:31", tags: ["educacion", "reparación"] },
		{ id: "YxPfx-W9ktc", title: "ALARGA la VIDA a tus DIPOSITIVOS.. la PROTECCIÒN es PRIMERO..!!", description: "", link: "https://youtu.be/YxPfx-W9ktc", published: "Feb 11 2023", viewTime: "02:54", tags: ["educacion", "reparación"] },
		{ id: "dgXIwP5iuEQ", title: "SAMSUNG Galaxy J6 Plus..!! CAMBIO de GLASS", description: "", link: "https://youtu.be/dgXIwP5iuEQ", published: "Feb 4 2023", viewTime: "02:56", tags: ["educacion", "reparación"] },
		{ id: "kt-8lKni8VQ", title: "NO DESCUIDES tu TELÉFONO de estos CARNAVALES..!!!", description: "", link: "https://youtu.be/kt-8lKni8VQ", published: "Jan 29 2023", viewTime: "01:10", tags: ["educacion", "reparación"] },
		{ id: "8zCC7D4Mm9M", title: "iPhone 8 Plus MOJADO...!! ELIMINACIÓN de HUMEDAD y cambio BLACKLIGTH marcado por LÍQUIDO.", description: "", link: "https://youtu.be/8zCC7D4Mm9M", published: "Jan 28, 2023", viewTime: "02:46", tags: ["educacion", "reparación"] },
		{ id: "27MnzhfPNk4", title: "HUAWEI Y5 2019..!! DIGITALIZADOR de TOUCH no responde a solicitud de SENSIBILIDAD.", description: "", link: "https://youtu.be/27MnzhfPNk4", published: "Jan 21 2023", viewTime: "02:37", tags: ["educacion", "reparación"] },
		{ id: "3AUvRBm5syU", title: "IPHONE 6..!! como PASAR de tener 16GB a tener 128GB...!!", description: "", link: "https://youtu.be/3AUvRBm5syU", published: "Jan 14 2023", viewTime: "00:59", tags: ["educacion", "reparación"] },
		{ id: "jGrTIRpoqO0", title: "SAMSUNG A10 MOJADO!!! CORRE a TeamCellmania INMEDIATAMENTE..!!!!", description: "", link: "https://youtu.be/jGrTIRpoqO0", published: "Jan 7 2023", viewTime: "03:44", tags: ["educacion", "reparación"] },
		{ id: "4XV68KfelDA", title: "iPhone 8 Plus... cambio de BATERIA & GLASS!!", description: "", link: "https://youtu.be/4XV68KfelDA", published: "Jan 2 2023", viewTime: "03:45", tags: ["educacion", "reparación"] },
		{ id: "9Vd0kAX0IFM", title: "Llego la Navidad a TeamCellmania!!!", description: "", link: "https://youtu.be/9Vd0kAX0IFM", published: "Dec 24 2022", viewTime: "06:35", tags: ["educacion", "reparación"] },
		{ id: "8LH2URpp5Uw", title: "SAMSUNG A32 no FUNCIONA el TACTIL!!! EXPLICACIÓN y SOLUCIÓN!!!", description: "", link: "https://youtu.be/8LH2URpp5Uw", published: "Dec 17 2022", viewTime: "06:33", tags: ["educacion", "reparación"] },
		{ id: "H7k1CIp9WFs", title: "iPhone X con PROBLEMAS en FLASH y CAMARA!!!", description: "", link: "https://youtu.be/H7k1CIp9WFs", published: "Dec 10 2022", viewTime: "11:16", tags: ["educacion", "reparación"] },
	]);

	await db.insert(Locations).values([
		{ id: "0190bd11-8578-7cb2-8c93-b991311222e8", coords: { lat: -2.7368045, lng: -78.8472221 }, name: "Matovelle" },
		{ id: "0190bd11-b0fb-7209-83dd-b613deca35a6", coords: { lat: -2.7397863, lng: -78.8483567 }, name: "Principal" },
		{ id: "0190bd11-d88b-7acb-bd53-96f15e20f0b7", coords: { lat: -2.712527, lng: -78.889885 }, name: "Biblian" },
		{ id: "0190bd11-27c9-7fc6-8c93-c0e959ffadb5", coords: { lat: -2.7376191, lng: -78.8468119 }, name: "Bolivar" },
	]);

	await db.insert(Repuestos).values([
		// =====================================================
		// PANTALLAS
		// =====================================================

		// ==================== SERIE X (X / XS / XR / XS Max) ====================
		{ id: "rep-pantalla-iphone-x", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-x", precioConMensaje: 70, precioSinMensaje: 100, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-x"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-x-oled", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-x-oled", precioConMensaje: null, precioSinMensaje: 70, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-x"], tags: ["pantalla", "iphone"] },

		{ id: "rep-pantalla-iphone-xs", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-xs", precioConMensaje: 100, precioSinMensaje: null, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-xs"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-xs-oled", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-xs-oled", precioConMensaje: 70, precioSinMensaje: null, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-xs"], tags: ["pantalla", "iphone"] },

		{ id: "rep-pantalla-iphone-xr", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-xr", precioConMensaje: null, precioSinMensaje: 90, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-xr"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-xr-oled", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-xr-oled", precioConMensaje: null, precioSinMensaje: 60, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-xr"], tags: ["pantalla", "iphone"] },

		{ id: "rep-pantalla-iphone-xs-max", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-xs-max", precioConMensaje: null, precioSinMensaje: 120, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-xs-max"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-xs-max-oled", deviceType: "iphone", familia: "iphone-x", categoria: "pantalla", modelo: "iphone-xs-max-oled", precioConMensaje: null, precioSinMensaje: 90, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-xs-max"], tags: ["pantalla", "iphone"] },

		// ==================== SERIE 11 ====================
		{ id: "rep-pantalla-iphone-11", deviceType: "iphone", familia: "iphone-11", categoria: "pantalla", modelo: "iphone-11", precioConMensaje: 60, precioSinMensaje: 90, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-11"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-11-pro", deviceType: "iphone", familia: "iphone-11", categoria: "pantalla", modelo: "iphone-11-pro", precioConMensaje: 100, precioSinMensaje: 130, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-11-pro"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-11-pro-max", deviceType: "iphone", familia: "iphone-11", categoria: "pantalla", modelo: "iphone-11-pro-max", precioConMensaje: 110, precioSinMensaje: 140, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-11-pro-max"], tags: ["pantalla", "iphone"] },

		// ==================== SERIE 12 ====================
		{ id: "rep-pantalla-iphone-12", deviceType: "iphone", familia: "iphone-12", categoria: "pantalla", modelo: "iphone-12", precioConMensaje: 110, precioSinMensaje: 140, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-12"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-12-pro", deviceType: "iphone", familia: "iphone-12", categoria: "pantalla", modelo: "iphone-12-pro", precioConMensaje: 110, precioSinMensaje: 140, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-12-pro"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-12-pro-max", deviceType: "iphone", familia: "iphone-12", categoria: "pantalla", modelo: "iphone-12-pro-max", precioConMensaje: 200, precioSinMensaje: 230, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-12-pro-max"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-12-mini", deviceType: "iphone", familia: "iphone-12", categoria: "pantalla", modelo: "iphone-12-mini", precioConMensaje: 120, precioSinMensaje: 150, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-12-mini"], tags: ["pantalla", "iphone"] },

		// ==================== SERIE 13 ====================
		{ id: "rep-pantalla-iphone-13", deviceType: "iphone", familia: "iphone-13", categoria: "pantalla", modelo: "iphone-13", precioConMensaje: 150, precioSinMensaje: 180, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-13"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-13-pro", deviceType: "iphone", familia: "iphone-13", categoria: "pantalla", modelo: "iphone-13-pro", precioConMensaje: 190, precioSinMensaje: 220, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-13-pro"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-13-pro-max", deviceType: "iphone", familia: "iphone-13", categoria: "pantalla", modelo: "iphone-13-pro-max", precioConMensaje: 240, precioSinMensaje: 270, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-13-pro-max"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-13-mini", deviceType: "iphone", familia: "iphone-13", categoria: "pantalla", modelo: "iphone-13-mini", precioConMensaje: 170, precioSinMensaje: 200, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-13-mini"], tags: ["pantalla", "iphone"] },

		// ==================== SERIE 14 ====================
		{ id: "rep-pantalla-iphone-14", deviceType: "iphone", familia: "iphone-14", categoria: "pantalla", modelo: "iphone-14", precioConMensaje: 260, precioSinMensaje: 300, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-14"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-14-pro", deviceType: "iphone", familia: "iphone-14", categoria: "pantalla", modelo: "iphone-14-pro", precioConMensaje: 250, precioSinMensaje: 275, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-14-pro"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-14-pro-max", deviceType: "iphone", familia: "iphone-14", categoria: "pantalla", modelo: "iphone-14-pro-max", precioConMensaje: 300, precioSinMensaje: 330, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-14-pro-max"], tags: ["pantalla", "iphone"] },

		// ==================== SERIE 15 ====================
		{ id: "rep-pantalla-iphone-15-pro", deviceType: "iphone", familia: "iphone-15", categoria: "pantalla", modelo: "iphone-15-pro", precioConMensaje: 350, precioSinMensaje: 400, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-15-pro"], tags: ["pantalla", "iphone"] },
		{ id: "rep-pantalla-iphone-15-pro-max", deviceType: "iphone", familia: "iphone-15", categoria: "pantalla", modelo: "iphone-15-pro-max", precioConMensaje: 330, precioSinMensaje: 360, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-15-pro-max"], tags: ["pantalla", "iphone"] },

		// ==================== SERIE 17 ====================
		{ id: "rep-pantalla-iphone-17-pro", deviceType: "iphone", familia: "iphone-17", categoria: "pantalla", modelo: "iphone-17-pro", precioConMensaje: 440, precioSinMensaje: 470, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-17-pro"], tags: ["pantalla", "iphone"] },

		// =====================================================
		// BATERÍAS
		// =====================================================

		// ==================== MODELOS ANTIGUOS ====================
		{ id: "rep-bateria-iphone-4-4s", deviceType: "iphone", familia: "iphone-4", categoria: "bateria", modelo: "iphone-4-4s", precioConMensaje: null, precioSinMensaje: 10, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-4s"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-5-5s", deviceType: "iphone", familia: "iphone-5", categoria: "bateria", modelo: "iphone-5-5s", precioConMensaje: null, precioSinMensaje: 15, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-5s"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-6", deviceType: "iphone", familia: "iphone-6", categoria: "bateria", modelo: "iphone-6", precioConMensaje: null, precioSinMensaje: 20, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-6"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-6s", deviceType: "iphone", familia: "iphone-6", categoria: "bateria", modelo: "iphone-6s", precioConMensaje: null, precioSinMensaje: 20, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-6s"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-6-plus", deviceType: "iphone", familia: "iphone-6", categoria: "bateria", modelo: "iphone-6-plus", precioConMensaje: null, precioSinMensaje: 25, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-6-plus"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-7", deviceType: "iphone", familia: "iphone-7", categoria: "bateria", modelo: "iphone-7", precioConMensaje: null, precioSinMensaje: 30, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-7"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-se-2020", deviceType: "iphone", familia: "iphone-se", categoria: "bateria", modelo: "iphone-se-2020", precioConMensaje: null, precioSinMensaje: 25, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-se-2020"], tags: ["bateria", "iphone"] },

		// ==================== SERIE X ====================
		{ id: "rep-bateria-iphone-x", deviceType: "iphone", familia: "iphone-x", categoria: "bateria", modelo: "iphone-x", precioConMensaje: null, precioSinMensaje: 40, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-x"], tags: ["bateria", "iphone"] },

		// ==================== SERIE 11 ====================
		{ id: "rep-bateria-iphone-11", deviceType: "iphone", familia: "iphone-11", categoria: "bateria", modelo: "iphone-11", precioConMensaje: 45, precioSinMensaje: 75, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-11"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-11-pro-max", deviceType: "iphone", familia: "iphone-11", categoria: "bateria", modelo: "iphone-11-pro-max", precioConMensaje: 49, precioSinMensaje: 79, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-11-pro-max"], tags: ["bateria", "iphone"] },

		// ==================== SERIE 12 ====================
		{ id: "rep-bateria-iphone-12", deviceType: "iphone", familia: "iphone-12", categoria: "bateria", modelo: "iphone-12", precioConMensaje: 50, precioSinMensaje: 80, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-12"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-12-pro", deviceType: "iphone", familia: "iphone-12", categoria: "bateria", modelo: "iphone-12-pro", precioConMensaje: 55, precioSinMensaje: 85, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-12-pro"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-12-pro-max", deviceType: "iphone", familia: "iphone-12", categoria: "bateria", modelo: "iphone-12-pro-max", precioConMensaje: 59, precioSinMensaje: 89, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-12-pro-max"], tags: ["bateria", "iphone"] },

		// ==================== SERIE 13 ====================
		{ id: "rep-bateria-iphone-13", deviceType: "iphone", familia: "iphone-13", categoria: "bateria", modelo: "iphone-13", precioConMensaje: 60, precioSinMensaje: 90, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-13"], tags: ["bateria", "iphone"] },
		{ id: "rep-bateria-iphone-13-pro-max", deviceType: "iphone", familia: "iphone-13", categoria: "bateria", modelo: "iphone-13-pro-max", precioConMensaje: 69, precioSinMensaje: 99, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-13-pro-max"], tags: ["bateria", "iphone"] },

		// ==================== SERIE 14 ====================
		{ id: "rep-bateria-iphone-14", deviceType: "iphone", familia: "iphone-14", categoria: "bateria", modelo: "iphone-14", precioConMensaje: 60, precioSinMensaje: 90, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-14"], tags: ["bateria", "iphone"] },

		// ==================== SERIE 15 ====================
		{ id: "rep-bateria-iphone-15-pro", deviceType: "iphone", familia: "iphone-15", categoria: "bateria", modelo: "iphone-15-pro", precioConMensaje: 65, precioSinMensaje: 95, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-15-pro"], tags: ["bateria", "iphone"] },

		// ==================== SERIE 16 ====================
		{ id: "rep-bateria-iphone-16-pro-max", deviceType: "iphone", familia: "iphone-16", categoria: "bateria", modelo: "iphone-16-pro-max", precioConMensaje: 69, precioSinMensaje: 99, calidad: "original", garantiaDias: 180, imageUrl: IMGS["iphone-16-pro-max"], tags: ["bateria", "iphone"] },
	]);
}