import { Client } from "discord.js";
import { token } from "C:/Users/Coryz/Documents/cipherBot/src/token.json";
import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
client.login(token);