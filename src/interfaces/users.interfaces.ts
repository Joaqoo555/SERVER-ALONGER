import { Types } from "mongoose";
// import { ERole } from "./role.interface";

export type TLocality =
  | "neuquen"
  | "centenario"
  | "plotier"
  | "cipolleti"
  | "cinco saltos";

export  enum ELocality {
    Neuquen = "neuquen",
    Centenario = "centenario",
    Plotier = "plotier",
    Cipolleti = "cinco saltos",
    CincoSaltos = "cinco saltos",
}

type Phone = `+${number}`;

//Interface para hacer la compra completa, si o si tienen que estar todos los datos llenos
//Se hara un model en el front antes de pasar a la compra, para que rellene los datos necesesarios.
export interface Iuser extends IuserLog {
  _id?: string
  username: string;
  address: string;
  newsletter: boolean;
  phone: Phone;
  locality: TLocality;
  createdAt:string;
  updatedAt:string;
}

//Para loguearse solo se necesita el email y password
export interface IuserLog {
  email: string;
  password: string;
}

//Cuando se registra un usuario se guarda en la base de datos con sus respectivos datos
//address, phone and locality, no hacen falta para cuando se registre, pero si hacen falta para comprar.
export interface IuserRegister {
  username: string;
  email: string;
  password: string;
  newsletter: boolean;
  role: Types.ObjectId;
  address?: string;
  phone?: Phone;
  locality?: TLocality;
  createdAt?:string;
  updatedAt?:string;
}