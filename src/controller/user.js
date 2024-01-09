import { Users } from "../model/comment"

export const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body)
        return res.json(user);
    } catch (error) {
        return res.json({ error: error })
    }
}

export const getUsers = async (req, res) => {
    try {
        const user = await Users.find()
        return res.json(user);
    } catch (error) {
        return res.json({ error: error })
    }
}