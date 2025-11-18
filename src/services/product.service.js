import { destroyProduct, getProduct, getProducts, insertProduct } from "../models/product.model.js";

export async function getAllProducts() {
    const products = await getProducts();
    return products;
};

export async function getProductById(id) {
    const product = await getProduct(id);
    return product;
};

export async function createProduct(data) {
    const created = await insertProduct(data);
    return created;
};

export async function deleteProduct(id) {
    if(!await getProduct(id)) {
        return false;
    }

    await destroyProduct(id);
    return true;
};