import { Types } from "mongoose";

export interface Iestablishment {
    _id?: string;
    name: string;
    date?: string;
    equipment:Types.ObjectId;
    referent: string;
    
}

