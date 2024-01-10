

import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/thi")

const products = new mongoose.Schema({

    name: {
        type: "string",

    },

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ]
})

export default mongoose.model("products", products)