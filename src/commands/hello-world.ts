/* */

import { Message } from "discord.js";
import { AlexClient } from "../Index";
import { SetAlexSettings } from "../Utilities/AlexSettings";

export async function helloworldCommand(message: Message) {
      if (message.content.startsWith(`${SetAlexSettings.prefix}hello`) && message.content.endsWith("}")) {
            message.channel.send("Hello, world!");
      };
};