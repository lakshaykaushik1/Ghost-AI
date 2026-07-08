import dotenv from "dotenv";

dotenv.config();

export const env = {
  BOT_TOKEN: process.env.BOT_TOKEN!,
  CLIENT_ID: process.env.CLIENT_ID!,
  GUILD_ID: process.env.GUILD_ID!,
  MONGODB_URI: process.env.MONGODB_URI!,
  OWNER_ID: process.env.OWNER_ID!,
};