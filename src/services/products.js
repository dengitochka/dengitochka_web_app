import { API_Config } from "../config";

export async function fetchProducts() {
    let response = await fetch([API_Config.url, API_Config.endpoints.get_products, '?', 
        new URLSearchParams({
            isAllProducts: true
        })].join(''));

        console.log(response);
    if (!response.ok)
    {
        console.log(`Server gave bad response while it processed to get products request. Status - ${response.status}, 
        Error - ${response.statusText}`)
    }
    
    return await response.json();
}

export async function fetchProduct(productId) {
    console.log(`fetch productId ${productId}`);
    let response = await fetch([API_Config.url, API_Config.endpoints.get_products, '?', 
        new URLSearchParams({
            isAllProducts: false,
            productId: productId
        })].join(''));

    console.log(response);
    if (!response.ok)
    {
        console.log(`Server gave bad response while it processed to get products request. Status - ${response.status}, 
        Error - ${response.statusText}`)
    }
    
    return await response.json();
}