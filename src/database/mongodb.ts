import mongoose from "mongoose";
import { env } from "../config/env";
import { logger } from "../utils/logger";

export async function connectMongo() {
  try {
    await mongoose.connect(env.MONGODB_URI);

    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("MongoDB Connection Failed");
    console.error(error);

    process.exit(1);
  }
}