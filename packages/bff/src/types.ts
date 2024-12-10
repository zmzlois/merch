import { DateTime, Str } from "chanfana";
import { z } from "zod"

export const Products = z.object({
	current_page: z.number(),
	data: z.array(
		z.union([
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.object({
						name: z.string(),
						type: z.string(),
						values: z.array(z.object({ id: z.number(), title: z.string() })),
						display_in_preview: z.boolean()
					})
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.object({
								position: z.string(),
								images: z.array(
									z.object({
										id: z.string(),
										name: z.string(),
										type: z.string(),
										height: z.number(),
										width: z.number(),
										x: z.number(),
										y: z.number(),
										scale: z.number(),
										angle: z.number(),
										src: z.string()
									})
								)
							})
						),
						background: z.string()
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			}),
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.union([
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(
								z.object({
									id: z.number(),
									title: z.string(),
									colors: z.array(z.string())
								})
							),
							display_in_preview: z.boolean()
						}),
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(z.object({ id: z.number(), title: z.string() })),
							display_in_preview: z.boolean()
						})
					])
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.union([
								z.object({
									position: z.string(),
									images: z.array(
										z.object({
											id: z.string(),
											name: z.string(),
											type: z.string(),
											height: z.number(),
											width: z.number(),
											x: z.number(),
											y: z.number(),
											scale: z.number(),
											angle: z.number(),
											src: z.string()
										})
									)
								}),
								z.object({
									position: z.string(),
									images: z.array(
										z.object({
											id: z.string(),
											name: z.string(),
											type: z.string(),
											height: z.number(),
											width: z.number(),
											x: z.number(),
											y: z.number(),
											scale: z.number(),
											angle: z.number(),
											font_family: z.string(),
											font_size: z.number(),
											font_weight: z.number(),
											font_color: z.string(),
											input_text: z.string()
										})
									)
								}),
								z.object({
									position: z.string(),
									images: z.array(z.unknown())
								})
							])
						),
						font_color: z.string(),
						font_family: z.string(),
						background: z.string()
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			}),
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.object({
						name: z.string(),
						type: z.string(),
						values: z.array(z.object({ id: z.number(), title: z.string() })),
						display_in_preview: z.boolean()
					})
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.union([
								z.object({
									position: z.string(),
									images: z.array(z.unknown())
								}),
								z.object({
									position: z.string(),
									images: z.array(
										z.object({
											id: z.string(),
											name: z.string(),
											type: z.string(),
											height: z.number(),
											width: z.number(),
											x: z.number(),
											y: z.number(),
											scale: z.number(),
											angle: z.number(),
											src: z.string()
										})
									)
								})
							])
						),
						background: z.string()
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			}),
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.union([
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(z.object({ id: z.number(), title: z.string() })),
							display_in_preview: z.boolean()
						}),
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(
								z.object({
									id: z.number(),
									title: z.string(),
									colors: z.array(z.string())
								})
							),
							display_in_preview: z.boolean()
						})
					])
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.object({
								position: z.string(),
								images: z.array(
									z.object({
										id: z.string(),
										name: z.string(),
										type: z.string(),
										height: z.number(),
										width: z.number(),
										x: z.number(),
										y: z.number(),
										scale: z.number(),
										angle: z.number(),
										src: z.string()
									})
								)
							})
						)
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			}),
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.union([
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(z.object({ id: z.number(), title: z.string() })),
							display_in_preview: z.boolean()
						}),
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(
								z.object({
									id: z.number(),
									title: z.string(),
									colors: z.array(z.string())
								})
							),
							display_in_preview: z.boolean()
						})
					])
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.object({
								position: z.string(),
								images: z.array(
									z.object({
										id: z.string(),
										name: z.string(),
										type: z.string(),
										height: z.number(),
										width: z.number(),
										x: z.number(),
										y: z.number(),
										scale: z.number(),
										angle: z.number(),
										src: z.string()
									})
								)
							})
						),
						background: z.string()
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			}),
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.union([
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(
								z.object({
									id: z.number(),
									title: z.string(),
									colors: z.array(z.string())
								})
							),
							display_in_preview: z.boolean()
						}),
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(z.object({ id: z.number(), title: z.string() })),
							display_in_preview: z.boolean()
						})
					])
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.object({
								position: z.string(),
								images: z.array(
									z.object({
										id: z.string(),
										name: z.string(),
										type: z.string(),
										height: z.number(),
										width: z.number(),
										x: z.number(),
										y: z.number(),
										scale: z.number(),
										angle: z.number(),
										src: z.string()
									})
								)
							})
						)
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			}),
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.union([
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(z.object({ id: z.number(), title: z.string() })),
							display_in_preview: z.boolean()
						}),
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(
								z.object({
									id: z.number(),
									title: z.string(),
									colors: z.array(z.string())
								})
							),
							display_in_preview: z.boolean()
						})
					])
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.union([
								z.object({
									position: z.string(),
									images: z.array(
										z.object({
											id: z.string(),
											name: z.string(),
											type: z.string(),
											height: z.number(),
											width: z.number(),
											x: z.number(),
											y: z.number(),
											scale: z.number(),
											angle: z.number(),
											font_family: z.string(),
											font_size: z.number(),
											font_weight: z.number(),
											font_color: z.string(),
											input_text: z.string()
										})
									)
								}),
								z.object({
									position: z.string(),
									images: z.array(z.unknown())
								}),
								z.object({
									position: z.string(),
									images: z.array(
										z.object({
											id: z.string(),
											name: z.string(),
											type: z.string(),
											height: z.number(),
											width: z.number(),
											x: z.number(),
											y: z.number(),
											scale: z.number(),
											angle: z.number(),
											src: z.string()
										})
									)
								})
							])
						),
						font_color: z.string(),
						font_family: z.string(),
						background: z.string()
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			}),
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				options: z.array(
					z.union([
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(
								z.object({
									id: z.number(),
									title: z.string(),
									colors: z.array(z.string())
								})
							),
							display_in_preview: z.boolean()
						}),
						z.object({
							name: z.string(),
							type: z.string(),
							values: z.array(z.object({ id: z.number(), title: z.string() })),
							display_in_preview: z.boolean()
						})
					])
				),
				variants: z.array(
					z.object({
						id: z.number(),
						sku: z.string(),
						cost: z.number(),
						price: z.number(),
						title: z.string(),
						grams: z.number(),
						is_enabled: z.boolean(),
						is_default: z.boolean(),
						is_available: z.boolean(),
						is_printify_express_eligible: z.boolean(),
						options: z.array(z.number()),
						quantity: z.number()
					})
				),
				images: z.array(
					z.object({
						src: z.string(),
						variant_ids: z.array(z.number()),
						position: z.string(),
						is_default: z.boolean(),
						is_selected_for_publishing: z.boolean(),
						order: z.null()
					})
				),
				created_at: z.string(),
				updated_at: z.string(),
				visible: z.boolean(),
				is_locked: z.boolean(),
				blueprint_id: z.number(),
				user_id: z.number(),
				shop_id: z.number(),
				print_provider_id: z.number(),
				print_areas: z.array(
					z.object({
						variant_ids: z.array(z.number()),
						placeholders: z.array(
							z.union([
								z.object({
									position: z.string(),
									images: z.array(
										z.object({
											id: z.string(),
											name: z.string(),
											type: z.string(),
											height: z.number(),
											width: z.number(),
											x: z.number(),
											y: z.number(),
											scale: z.number(),
											angle: z.number(),
											src: z.string()
										})
									)
								}),
								z.object({
									position: z.string(),
									images: z.array(z.unknown())
								})
							])
						),
						font_color: z.string(),
						font_family: z.string()
					})
				),
				print_details: z.array(z.unknown()),
				sales_channel_properties: z.array(z.unknown()),
				is_printify_express_eligible: z.boolean(),
				is_printify_express_enabled: z.boolean(),
				is_economy_shipping_eligible: z.boolean(),
				is_economy_shipping_enabled: z.boolean(),
				is_deleted: z.boolean(),
				original_product_id: z.string(),
				views: z.array(
					z.object({
						id: z.number(),
						label: z.string(),
						position: z.string(),
						files: z.array(
							z.object({ src: z.string(), variant_ids: z.array(z.number()) })
						)
					})
				)
			})
		])
	),
	first_page_url: z.string(),
	from: z.number(),
	last_page: z.number(),
	last_page_url: z.string(),
	links: z.array(
		z.union([
			z.object({ url: z.null(), label: z.string(), active: z.boolean() }),
			z.object({ url: z.string(), label: z.string(), active: z.boolean() })
		])
	),
	next_page_url: z.null(),
	path: z.string(),
	per_page: z.number(),
	prev_page_url: z.null(),
	to: z.number(),
	total: z.number()
})

export const Product = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	tags: z.array(z.string()),
	options: z.array(
		z.object({
			name: z.string(),
			type: z.string(),
			values: z.array(z.object({ id: z.number(), title: z.string() })),
			display_in_preview: z.boolean()
		})
	),
	variants: z.array(
		z.object({
			id: z.number(),
			sku: z.string(),
			cost: z.number(),
			price: z.number(),
			title: z.string(),
			grams: z.number(),
			is_enabled: z.boolean(),
			is_default: z.boolean(),
			is_available: z.boolean(),
			is_printify_express_eligible: z.boolean(),
			options: z.array(z.number()),
			quantity: z.number()
		})
	),
	images: z.array(
		z.object({
			src: z.string(),
			variant_ids: z.array(z.number()),
			position: z.string(),
			is_default: z.boolean(),
			is_selected_for_publishing: z.boolean(),
			order: z.null()
		})
	),
	created_at: z.string(),
	updated_at: z.string(),
	visible: z.boolean(),
	is_locked: z.boolean(),
	blueprint_id: z.number(),
	user_id: z.number(),
	shop_id: z.number(),
	print_provider_id: z.number(),
	print_areas: z.array(
		z.object({
			variant_ids: z.array(z.number()),
			placeholders: z.array(
				z.object({
					position: z.string(),
					images: z.array(
						z.object({
							id: z.string(),
							name: z.string(),
							type: z.string(),
							height: z.number(),
							width: z.number(),
							x: z.number(),
							y: z.number(),
							scale: z.number(),
							angle: z.number(),
							src: z.string()
						})
					)
				})
			),
			background: z.string()
		})
	),
	print_details: z.array(z.unknown()),
	sales_channel_properties: z.array(z.unknown()),
	is_printify_express_eligible: z.boolean(),
	is_printify_express_enabled: z.boolean(),
	is_economy_shipping_eligible: z.boolean(),
	is_economy_shipping_enabled: z.boolean(),
	is_deleted: z.boolean(),
	original_product_id: z.string(),
	views: z.array(
		z.object({
			id: z.number(),
			label: z.string(),
			position: z.string(),
			files: z.array(
				z.object({ src: z.string(), variant_ids: z.array(z.number()) })
			)
		})
	)
})