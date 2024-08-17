import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    title: { type: string, required: true },
  },
  { 
    versionKey: true,
    timestamps: true 
  }
);

const categoryModel = mongoose.model("category", categorySchema);
export default categoryModel;
