import { Types } from "mongoose";

export interface Isite {
    _id?: string;
    name: string;
    date: string;
    establishment: Types.ObjectId;
    referent?: string;
    hourInit: string;
    hourFin: string;
    client: string;
    location: string;
    operator: string;
    equipmentMedition: string;
    stateOfTerrain: string;
}

