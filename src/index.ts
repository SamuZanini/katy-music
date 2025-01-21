import { bootstrap } from "#base";
import { setSongStatus } from "#functions";
import { Player } from "discord-player";
import { Client } from "discord.js";

await bootstrap({ meta: import.meta });

const client = new Client({
  intents: [],
});

client.login(process.env.DISCORD_TOKEN);

const player = new Player(client as never);
player.extractors.loadDefault();

setSongStatus