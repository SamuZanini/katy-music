import { createCommand } from "#base";
import { icon, res } from "#functions";
import { ApplicationCommandType } from "discord.js";

createCommand({
    name: "música",
    description: "Comando de música",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,
    async run(interaction){
        interaction.reply(res.success(`${icon("luffy").toString()} Tudo certo!`));
    }
});
