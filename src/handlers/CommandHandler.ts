import { glob } from "glob";
import path from "path";
import { GhostClient } from "../bot";
import { Command } from "../interfaces/Command";

export async function loadCommands(client: GhostClient) {

    const commandFiles = await glob(
        path.join(__dirname, "../commands/**/*.ts")
    );

    for (const file of commandFiles) {

        const command: { default: Command } = await import(file);

        client.commands.set(
            command.default.data.name,
            command.default
        );

        console.log(`✅ Loaded command: ${command.default.data.name}`);

    }

}