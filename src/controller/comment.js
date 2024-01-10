import Comments from "../model/comment.js"


export const getAllComment = async (req, res) => {
    try {
        console.log(req.params)
        const result = await Comments.find({ productId: req.params.id }).populate
            ({
                path: 'parentId',
                populate: {
                    path: 'author',
                    select: '-__v'
                }
            }).populate
            (["author"]).exec()
        return res.json(result)
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
export const replyComment = async (req, res) => {
    try {
        /***
         req.body={
parentId: id comment reply
authorId: id comment user reply
text: content 
        }
        
        *  */
        const { _id, ...data } = req.body
        const result = await Comments.findById({
            _id
        })
        if (!result) {
            return res.status(400).json("Khong tim thay")
        }
        const commnetReply = await Comments.create({
            ...data,

            parentId: _id

        })
        return res.status(200).json(commnetReply)
    } catch (error) {
        return res.json({ error: error.message })
    }
}