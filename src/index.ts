import { client } from "./bot";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import { connectMongo } from "./database/mongodb";
import { loadCommands } from "./handlers/CommandHandler";

async function start() {

    logger.info("Starting GhostCore...");

    await connectMongo();

    await loadCommands(client);

    client.once("clientReady", (client) => {
        logger.info(`Logged in as ${client.user.tag}`);
    });

    await client.login(env.BOT_TOKEN);

}

start();