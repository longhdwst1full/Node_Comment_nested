import Comments from "../model/comment.js"


export const getAllComment = async (req, res) => {
    try {
        const result = await Comments.find({
            ...req.body
        }).populate("productId").populate("author")
        return res.status(201).json(result)
    } catch (error) {
        return res.json({ error: error.message })
    }
}
export const createComment = async (req, res) => {
    try {
        const result = await Comments.create({
            ...req.body
        })
        return res.status(201).json(result)
    } catch (error) {
        return res.json({ error: error.message })
    }
}