import { Schema, model } from "mongoose";
import { Isite } from "../interfaces/site.interfaces";

const siteSchema = new Schema<Isite>(
  {
    client: { type: String, required: true },
    date: { type: String, required: true },
    name: { type: String, required: true },
    equipmentMedition: { type: String, required: true },
    stateOfTerrain: { type: String, required: true },
    hourInit: { type: String, required: true },
    location: { type: String, required: true },
    hourFin: { type: String, required: true },
    operator: { type: String, required: true },
    referent: { type: String, required: true },
    establishment: {
      type: Schema.Types.ObjectId,
      ref: "establishment",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("site", siteSchema);

// _id?: string;
// name: string;
// date: string;
// establishment: Iestablishment[];
// referent?: string;
// hourInit: string;
// hourFin: string;
// client: string;
// location: string;
// operator: string;
// equipmentMedition: string;
// stateOfTerrain: string;
