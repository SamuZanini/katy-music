import { settings } from "#settings";
import { createEmbed } from "@magicyan/discord";
import { InteractionReplyOptions } from "discord.js";

type SettingsCollors = typeof settings.colors;
type InteractionRes = Record<
    keyof SettingsCollors, 
    (text: string, options?: InteractionReplyOptions) => InteractionReplyOptions
>;

export const res: InteractionRes = Object.create({}, Object.entries(settings.colors)
    .reduce<PropertyDescriptorMap>((obj, [name, color]) => ({ 
        ...obj,
        [name]: {
            enumerable: true, 
            writable: false,
            value(description: string, options?: InteractionReplyOptions) {
                const embed = createEmbed({ color, description });
                const defaults = { fetchReply: true, ephemeral: true, embeds: [embed] };
                return Object.assign(defaults, options);
            }
        }
    }), {} as PropertyDescriptorMap)
);