import mongoose, { mongo } from 'mongoose';
import categoryModel from './../model/categoryModel';

class CategoryController{
    async getAllCategory(res,req){
        try {
            const category = await categoryModel.find().populate("category"); //lấy ra toàn bộ
            res.status(200).json({
                Message:"lấy thành công",
                data: category,
            })
        } catch (error) {
            res.status(500).json({
                Message: "lỗi" + error.Message,
            })
        }
    }

    async getOneCategory(res,req){
        try {
            const id = req.params.id
            const category = await categoryModel.findById(id).populate("category") // lấy ra 1 category
            res.status(200).json({
                Message:"Lấy thành công",
                data : category     
            })
        } catch (error) {
            res.status(500).json({
                Message:"lỗi" + error.Message
            })
        }
    }

    async updateCategory(res,req){
        try{
            const id = req.params.id
            const category = await categoryModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new:true}
            )
            if(!category){
                res.status(404).json({
                    message:"not found"
                })
            }
            res.status(200).json({
                message:"đã sửa thành công",
                data: category
            })
        }catch(error){
            res.status(500).json({
                message:"lỗi" + error.message
            })
        }
    }
}

export default CategoryController
