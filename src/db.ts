import mongoose from "mongoose";
import { config } from "./config";

export async function connectToDb() {
  try {
    await mongoose.connect(config.database, {

    });
    console.info(`connct to the port Database => ${config.database}`);
  } catch (error) {
    console.error(error);
  }
}