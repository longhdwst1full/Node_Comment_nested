import express from 'express';
import { add, deleteProducts, getProductList, getProductOne, updateProduct } from '../controller/products';

const routes = express.Router()


routes.get("/products", getProductList)
routes.post("/add_product", add)
routes.patch("/edit_product/:id", updateProduct)
routes.get("/product/:id", getProductOne)
routes.delete("/delete_product/:id", deleteProducts)

export default routes