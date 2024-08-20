import express from "express";
import ProductController from "../controller/productController";
import ProductController from './../controller/productController';

const productRouter = express.Route();
const productController = new ProductController

productRouter.get("/", productController.getAllproducts)
productRouter.get("/:id",productController.getOneProduct)
productRouter.get("/", productController.newProduct)
productRouter.get("/:id", productController.updateProduct)
productRouter.get("/", productController.deleteProduct)

export default productRouter;