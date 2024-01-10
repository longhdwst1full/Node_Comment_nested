import express from "express";
import dotenv from "dotenv";
import routes from "./router/products";
import cors from "cors"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    allowedHeaders: "*"
}))

app.use("/api", routes)

// app.listen(8080,()=>{
//     console.log("listening on " + port);
// })

export const viteNodeApp = app