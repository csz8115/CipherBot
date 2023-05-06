import { CommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { Hello } from "./commands/hello";
import { Ugly } from "./commands/uglyList";

export const Commands: Command[] = [Hello, Ugly];

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: CommandInteraction) => void;
} 