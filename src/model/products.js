

import mongose from "mongoose";

mongose.connect("mongodb://localhost:27017/thi")

const products = new mongose.Schema({

    name: {
        type: "string",

    },

    comments: [
        {
            type: mongose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ]
})

export default mongose.model("products", products)