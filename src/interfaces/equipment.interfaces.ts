import { Types } from "mongoose";

export interface Iequipment {
    _id?: string;
    name: string;
    value: number;
    dd?: Types.ObjectId;
    numberOfDd?: number
    typeDefault?: ETypeDefault.IA | ETypeDefault.NA;
    observations: string;
    //Hay que ver como esta hecho en el informe y agregar variables segun vayamos avanzando en la app.
}

export enum ETypeDefault {
    IA = "IA",
    NA = "N/A"
}