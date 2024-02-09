import { Schema, model } from "mongoose";
import { ETypeDefault, Iequipment } from "../interfaces/equipment.interfaces";
const siteShema = new Schema<Iequipment>(
  {
    name: { type: String, required: true },
    value: { type: Number, required: true },
    numberOfDd: { type: Number, required: true },
    observations: { type: String, required: true },
    typeDefault: { enum: Object.values(ETypeDefault) },
    dd: {
      type: Schema.Types.ObjectId,
      ref: "dd",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("site", siteShema);
