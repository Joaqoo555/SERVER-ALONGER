import { Schema, model } from "mongoose";
import { Iestablishment } from "../interfaces/establishment.interface";
const establishmentSchema = new Schema<Iestablishment>(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    equipment: {
      type: Schema.Types.ObjectId,
      ref: "equipment",
      required: true,
    },
    referent: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("establishment", establishmentSchema);
