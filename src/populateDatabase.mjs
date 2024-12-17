import { connectDb, closeDb } from "./config/dbConfig.mjs";
import { populateDatabase } from "./services/countriesService.mjs";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

async function run() {
  await connectDb();
  await populateDatabase();
  await closeDb();
}

run();
