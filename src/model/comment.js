import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',

    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
}, {
    versionKey: false,
    timestamps: true,
});


const Comments = mongoose.model('Comment', commentSchema);


export default Comments