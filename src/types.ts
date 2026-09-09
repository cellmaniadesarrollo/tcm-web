export type Site = {
	website: string;
	author: string;
	desc: string;
	title: string;
	// ogImage?: string;
	// lightAndDarkMode: boolean;
	postPerPage: number;
	scheduledPostMargin: number;
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

export type Image = string;
export type Video = string;
export type Component = React.ReactNode;

export interface Story {
	type: Image | Video | Component;
	url: string;
	duration?: number;
	thumbnail?: string;
}

export interface PriceRange {
	maxVariantPrice: {
		amount: number;
		currencyCode: string;
		formattedAmount: string;
		formattedCurrency: string;
		rawAmount: number;
	};
}

export interface Edges {
	node: {
		originalSrc: string;
	}
}

export interface Node {
	handle: string;
	title: string;
	priceRange: PriceRange;
	images: {
		edges: Edges[];
	};
}

export interface Product {
	node: Node;
}

export interface Location {
	latitude: number;
	longitude: number;
	name: string;
}
export type Repuesto = {
	id: string;
	categoria: string;
	modelo: string;
	precioConMensaje: number | null;
	precioSinMensaje: number | null;
	precioSoloRepuesto?: number | null;
	descripcion?: string | null;
	stock?: boolean | null;
	tags?: string[] | null | undefined;     // ← importante el undefined
	calidad: string | null;                  // ← aquí estaba el error
	garantiaDias: number | null;             // ← aquí estaba el otro error

	// Campos extras que vienen de tu API (opcional, pero recomendado)
	deviceType?: string;
	familia?: string;
	// si hay más campos que uses después, agrégalos aquí

};


