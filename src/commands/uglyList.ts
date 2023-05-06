import { CommandInteraction, Client } from "discord.js";
import { Command } from "../commands";
import { randomInt } from "crypto";

export const Ugly: Command = {
    name: "ugly",
    description: "I am ugly",
    run: async (client: Client, interaction: CommandInteraction) => {
        let num : Number = randomInt(0, 1);
        let url = "https://www.shutterstock.com/image-photo/piece-cheese-isolated-on-white-260nw-1416372146.jpg";
        let url2 = ""
        let content : string = "I am ugly";
        if (num == 0) {
            content = "I am not ugly";
        }

        await interaction.followUp({
            ephemeral: true,
            embeds: [{image: {url}}, {image: {url}}], 
        });
    }
}; 