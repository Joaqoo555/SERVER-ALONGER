import { Establishment } from "./establishment.interface";

export interface Site {
    _id?: string;
    name: string;
    date: string;
    establishment: Establishment[];
    referent?: string;
    hourInit: string;
    hourFin: string;
    client: string;
    location: string;
    operator: string;
    equipmentMedition: string;
    stateOfTerrain: string;
}

