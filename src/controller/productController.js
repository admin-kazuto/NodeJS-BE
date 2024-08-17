import { param } from "express/lib/request";
import productModel from "../model/productModel";

class ProductController {
  async getAllproducts(req, res) {
    try {
      const products = await productModel.find().populate("category");
      res.status(200).json({
        Message: "Lấy thành công",
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        Message: "lỗi" + error.Message,
      });
    }
  }

  async getOneProduct(req, res) {
    const id = req.params.id;
    const product = await productModel
      .findById(id)
      .populate("category", "name"); //còn thiếu chỗ này
    try {
      res.status(200).json({
        message: "lấy thành công",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        message: "lỗi" + error.message,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await productModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ message: "not found" });
      }
      res.status(200).json({
        message: "đã lấy sản phẩm",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        message: "lỗi" + error.message,
      });
    }
  }
}
