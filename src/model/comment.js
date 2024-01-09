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
        ref: 'product',
        required: true,
    },
    replies: [
        {
            id_comment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
            text: String,
            
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User', // Assuming you have a 'User' model for authors
                required: true,
            },
        }
    ],
});
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // Additional user fields can be added as needed
});

export const Users = mongoose.model('User', userSchema);

const Comments = mongoose.model('Comment', commentSchema);


export default Comments