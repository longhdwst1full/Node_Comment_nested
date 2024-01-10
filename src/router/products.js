import express from 'express';
import { add, deleteProducts, getProductList, getProductOne, updateProduct } from '../controller/products';
import { createComment, getAllComment } from '../controller/comment.js';
import { createUser, getUsers } from '../controller/user.js';

const routes = express.Router()


routes.get("/products", getProductList)
routes.get("/comments/:id", getAllComment)
routes.post("/users/add", createUser)
routes.get("/users", getUsers)
routes.post("/comments/add", createComment)
routes.post("/add_product", add)
routes.patch("/edit_product/:id", updateProduct)
routes.get("/product/:id", getProductOne)
routes.delete("/delete_product/:id", deleteProducts)

export default routes