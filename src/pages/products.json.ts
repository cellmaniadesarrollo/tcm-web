//src\pages\products.json.ts
import { getAllProducts } from "../utils/shopify";

export const POST = async () => {
	const res = await getAllProducts();

	if (res.status === 200) {
		const allProducts = res.body?.data.products;

		if (allProducts) {
			return new Response(JSON.stringify({ allProducts }), { status: 200 });
		}

		return new Response(JSON.stringify({ message: "Missing required fiels" }), {
			status: res.status,
		});
	}
};
