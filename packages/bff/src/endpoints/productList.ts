import { Bool, Num, OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { Products, Product } from "../types";
import { endpoints } from "../constant";


export class ProductList extends OpenAPIRoute {
	schema = {
		tags: ["Products"],
		summary: "List Products",
		request: {
			query: z.object({
				page: Num({
					description: "Page number",
					default: 0,
					required: false,
				}),
				isCompleted: Bool({
					description: "Filter by completed flag",
					required: false,
				}),
			}),
		},
		responses: {
			"200": {
				description: "Returns a list of products",
				content: {
					"application/json": {
						schema: z.object({
							series: z.object({
								success: Bool(),
								result: z.object({
									products: Product.array(),
								}),
							}),
						}),
					},
				},
			},
			"404": {
				description: "Internal server error. Products not found",
			},
		},
	};

	async handle(c) {

		// Get validated data
		const data = await this.getValidatedData<typeof this.schema>();


		// Retrieve the validated parameters
		const { page, isCompleted } = data.query;

		// Implement your own object list here


		try {

			const endpoint = new URL(`${c.env.BASE_URL}/v1/shops/${c.env.SHOP_ID}/products.json`)

			const response = await fetch(endpoint, {
				headers: {
					'Authorization': `Bearer ${c.env.ACCESS_TOKEN}`
				}
			})

			if (!response.ok) {
				console.error("Failed to fetch products", response)
				throw new Error("Failed to fetch products")
			}

			const data = await response.json()


			return data
		} catch (error) {
			console.error("Error fetching products", error)
		}


	}
}
