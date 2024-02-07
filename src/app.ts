import express, { Express } from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routes";
import { ErrorCatchEndware } from "./utils/errorCatching";
import cookieParser from "cookie-parser"
const server: Express = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json({ limit: "25mb" }));
server.use(bodyParser.json());
server.use(helmet());
server.use(cookieParser())
server.set("trust proxy", 1); // trust first prox

//Ruta index, middleware que junta todas las rutas para pasarla a 1
server.use("/api", indexRouter);

// Error catching endware.
server.use(ErrorCatchEndware);

export default server;