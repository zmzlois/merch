export const endpoints = (product_id?: string) => {
    const base_url = process.env.BASE_URL

    console.log(`products`, `${base_url}/v1/shops/${process.env.SHOP_ID}/products.json`)
    return {
        products: new URL(`${base_url}/v1/shops/${process.env.SHOP_ID}/products.json`),
        product: new URL(`${base_url}/v1/shops/${process.env.SHOP_ID}/products/${product_id}.json`)
    }

}