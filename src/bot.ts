import {
    Client,
    GatewayIntentBits,
    Partials,
    Collection
} from "discord.js";

import { Command } from "./interfaces/Command";

export interface GhostClient extends Client {
    commands: Collection<string, Command>;
}

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ],

    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember
    ]
}) as GhostClient;

client.commands = new Collection();