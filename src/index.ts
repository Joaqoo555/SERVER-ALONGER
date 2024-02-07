import server from "./app";
import { config } from "./config";
import { connectToDb } from "./db";
import dotenv from "dotenv";
// import { createRolesDefaults } from "./utils/userAccount";

dotenv.config({
  
});

server.listen(config.port, async () => {
    try {
      //Connect to the database!
      
      await connectToDb();
    //   await createRolesDefaults();
      console.info(`Server is listening on ${config.port}`);
    } catch (error: any) {
      console.error(error);
    }
  });