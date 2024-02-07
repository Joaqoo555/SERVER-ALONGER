import { Schema, model } from "mongoose";
import { IuserRegister, ELocality } from "../interfaces/users.interfaces";

const userSchema = new Schema<IuserRegister>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    newsletter: {
      type: Boolean,
      required: true,
      default: true,
    },
    address: {
      type: String,
      required: false,
    },
    locality: {
      type: String,
      enum: Object.values(ELocality),
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    role: { 
      type: Schema.Types.ObjectId,
      ref: "role",
      required: true 
    },
  },
  {
    timestamps: true,
  }
);

export default model("user", userSchema);