
import mongose from "mongoose";

mongose.connect("mongodb://localhost:27017/thi")

const products = new mongose.Schema({
    id: {
        type: "string",},
    name: {
        type: "string",

    },
    description: {
        type: "string",

    },
    image: {
        type: "string",

    },

})

export default mongose.model("products", products)