import { formatEmoji as discordFormatEmoji } from "discord.js";
import { settings } from "#settings";

type EmojiList = typeof settings.emojis;
type AnimatedKey = `:a:${keyof EmojiList["animated"]}`;
type StaticKey = keyof EmojiList["static"];
type EmojiKey = AnimatedKey | StaticKey;

export function icon(name: EmojiKey) {
    const animated = (name as string).startsWith(":a:");
    const id = animated
        ? String(settings.emojis.animated[(name as string).slice(3) as keyof EmojiList["animated"]])
        : String(settings.emojis.static[name as keyof EmojiList["static"]]);

    const toString = () => discordFormatEmoji(id, animated);

    return { id, animated, toString };
}