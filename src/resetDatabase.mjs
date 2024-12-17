import dotenv from "dotenv";
import { connectDb, closeDb } from "./config/dbConfig.mjs";
import { resetDatabase } from "./services/countriesService.mjs";

// Cargar variables de entorno
dotenv.config();

async function run() {
  await connectDb();
  await resetDatabase();
  await closeDb();
}

run();
