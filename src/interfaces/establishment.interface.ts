import { Equipment } from "./equipment.interfaces";

export interface Establishment {
    _id?: string;
    name: string;
    date: string;
    equipment: Equipment[];
    referent: string;
    
}

