import {
    SlashCommandBuilder,
    ChatInputCommandInteraction
} from "discord.js";

import { Command } from "../../interfaces/Command";

const command: Command = {

    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Check the bot latency"),

    async execute(interaction: ChatInputCommandInteraction) {

        const sent = await interaction.reply({
            content: "🏓 Pinging...",
            fetchReply: true
        });

        const latency =
            sent.createdTimestamp -
            interaction.createdTimestamp;

        await interaction.editReply(
            `🏓 Pong!\nAPI: ${interaction.client.ws.ping}ms\nLatency: ${latency}ms`
        );

    }

};

export default command;