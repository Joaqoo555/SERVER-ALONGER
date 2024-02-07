import dotenv from "dotenv";

/**
 * Enviroments variables.
 */
dotenv.config({
  
});

type Configuration = {
  readonly port?: number | string;
  readonly host?: string;
  readonly database: string;
  readonly username?: string;
  readonly password?: string;
};

//LOG PORT LISTEN
console.log(process.env.PORT)

//Configuration Database constants
export const config: Configuration = {
  port: process.env.PORT || 3500,
  host: process.env.DB_HOST || "",
  database: process.env.DB_NAME || "mongodb+srv://ALONGER:ALONGER@alonger.rcdo1ou.mongodb.net/?retryWrites=true&w=majority",
  username: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
};

/**
 * Create constants for HTTP Response to the server.
 */
type ConstantsHTTP = {
  readonly READOK: number,
  readonly CREATED: number,
  readonly BAD_REQUEST: number,
  readonly UNAUTHORIZED: number,
  readonly FORBIDDEN: number,  
  readonly INTERNALERROR: number,  
}

export const constantsHTTP:ConstantsHTTP = {
  READOK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNALERROR: 500
}


export const SECRET_JWT: string = process.env.SECRET_JWT || ""