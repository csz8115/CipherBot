import { CommandInteraction, Client } from "discord.js";
import { Command } from "../commands";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}; 