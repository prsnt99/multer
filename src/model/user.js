import mongoose from "mongoose";

const UserModel = mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },       
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("user", UserModel);
