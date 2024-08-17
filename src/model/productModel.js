import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: string, required: true },
    price: { type: number, required: true, min: 1 },
    description: { type: string, required: true },
    image: { type: string, required: true },
  },
  {
    versionKey: true,
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);
// tên model = hàm model (tên bảng dữ liệu, bản vẽ loại dữ liệu ấy)
export default productModel;
// export : đem cái model ra sử dụng ở file khác
