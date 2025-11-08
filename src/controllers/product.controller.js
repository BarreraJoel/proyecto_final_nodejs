import { getAllProducts, getProductById, createProduct, deleteProduct } from "../services/product.service.js";

export async function getAll(req, res) {
    try {
        const products = await getAllProducts();
        if (!products)
            throw new Error("No se pudieron obtener los productos");

        return res.status(200).json({
            success: true,
            message: "Productos obtenidos con exito",
            products: products
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export async function getById(req, res) {
    try {
        const id = req.params.id;
        const product = await getProductById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "No se encontró el producto",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Producto obtenido",
            product: product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export async function create(req, res) {
    try {
        const body = req.body;
        const product = await createProduct(body);
        if (!product)
            throw new Error("No se pudo crear el producto");

        return res.status(201).json({
            success: true,
            message: "Producto creado",
            product: product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export async function destroy(req, res) {
    try {
        const id = req.params.id;
        if (!await deleteProduct(id))
            throw new Error("No se pudo eliminar el producto");

        return res.status(204).json({
            success: true,
            message: "Producto eliminado con exito",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};