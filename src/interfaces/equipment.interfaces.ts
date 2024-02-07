import Dd from "./dd.interfaces";

export interface Equipment {
    _id?: string;
    name: string;
    value: number;
    type?: Dd[]
    numberOfDd?: number
    typeDefault?: ETypeDefault.IA | ETypeDefault.NA;
    observations: string;
    //Hay que ver como esta hecho en el informe y agregar variables segun vayamos avanzando en la app.
}

export enum ETypeDefault {
    IA = "IA",
    NA = "N/A"
}