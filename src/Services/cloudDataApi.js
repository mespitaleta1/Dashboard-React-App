/* eslint-disable no-undef */

export const getShopifyProducts = async () => {
    try {
        const apiResponse = await fetch( "/admin/api/2023-04/products.json", {
            'method': "GET",
            'headers': {
                'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN,
                
            }
        });
        return apiResponse.json();
    } catch (error){
        console.error("Error", error); 
    }
}
