import { Client } from "discord.js";
import { token } from "C:/Users/Coryz/Documents/cipherBot/src/token.json";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);
client.login(token);