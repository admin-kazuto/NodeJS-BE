import categoryModel from './../model/categoryModel';

class CategoryController{
    async getAllCategory(res,req){
        try {
            const category = await categoryModel.find().populate("product");
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
}
