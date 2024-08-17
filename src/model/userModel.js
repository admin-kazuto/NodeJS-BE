import { type } from "express/lib/response";
import { required, string } from "joi";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: { type: string, required: true, trim: true, minlength: 6 },
    password: { type: string, required: true, trim: true, minlength: 6 },
    role: { type: string, enum: ["admin", "user"], default: ["user"] },
    email: { type: string, unique: true, match: ["/.+@.+..+/"], trim: true },
  },
  {
    versionKey: true,
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
