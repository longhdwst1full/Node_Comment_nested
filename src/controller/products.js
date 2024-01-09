import axios from "axios";
import dotenv from "dotenv";
import products from "../model/products";
import express from "express";

import  Joi from "joi";
const productValidate = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required()
})

const getProductList = async (req, res) => {
    try {

        const result = await products.find().populate("comments");
        if (result.length > 0) {

            return res.status(200).json(result);
        }
        return res.status(200).json({
            message: "Db không có bản ghi nào"
        })
    } catch (error) {
        res.status(404).json({ message: "Không tìm thấy " })
    }
}


const getProductOne = async (req, res) => {
    try {

        const result = await products.findById(req.params.id);
        return res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: "Không tìm thấy " })
    }
}


const add = async (req, res) => {
    try {
        // const validate = productValidate.validate(req.body, { abortEarly: false });
        // const { error } = validate
        // const a = error.details

        // const error_name = a.map(item => ({
        //     message: item.message,
        //     name: item.path[0]
        // }))
        // console.log(error_name)
        // if (!error) {

            const productAdd = await products.create(req.body);
            return res.status(200).json({
                message: "Thêm thành công",
                data: productAdd
            })

        // }

        // return res.json({ error })

    } catch (error) {
        res.status(404).json({ message: "Không thêm đc" })


    }
}
const updateProduct = async (req, res) => {
    try {

        const productAdd = await products.updateOne({ _id: req.params.id }, req.body)
        return res.status(200).json({
            message: "Sửa thành công",
            data: productAdd
        })
    } catch (error) {
        res.status(404).json({ message: "Không thêm đc" })


    }
}
const deleteProducts = async (req, res) => {
    try {

        const productAdd = await products.deleteOne({ _id: req.params.id })
        return res.status(200).json({
            message: "Xóa thành công",
            data: productAdd
        })
    } catch (error) {
        res.status(404).json({ message: "Không thêm đc" })


    }
}

export {
    getProductList,
    add,
    updateProduct,
    deleteProducts,
    getProductOne
}