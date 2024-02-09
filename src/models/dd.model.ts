import { Schema, model } from "mongoose";
import Idd, { ETypeButton, ETypeDd } from "../interfaces/dd.interfaces";
const siteShema = new Schema<Idd>(
  {
    button: { enum:Object.values(ETypeButton), required: true },
    count: { type: Number, required: true },
    current_five: { type: Number, required: true },
    current_four: { type: Number, required: true },
    current_trhee: { type: Number, required: true },
    current_two: { type: Number, required: true },
    current_one: { type: Number, required: true },
    state: { type: String, required: true },
    type: { enum:Object.values(ETypeDd), required: true }
  },
  {
    timestamps: true,
  }
);

export default model("site", siteShema);