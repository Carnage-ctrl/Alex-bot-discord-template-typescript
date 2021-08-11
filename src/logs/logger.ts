/* */

import fs from 'fs';
import { Message } from 'discord.js';
export const db = "../db/userdb.json";

interface UserSettings {
      nome: string,
      messageContent: string,
      guildID: any,
      guildOwnerID: any,
};

export async function logger(message: Message) {
      const jsonUserDB: UserSettings = {
            nome: message.author.tag,
            messageContent: message.content,
            guildID: message.guild?.id,
            guildOwnerID: message.guild?.ownerID,
      };

      var jsonLogger = JSON.stringify(jsonUserDB);
      fs.appendFile("./src/db/simple-logger-db.json", jsonLogger, "utf-8", () => console.log("Arquivo atualizado com sucesso!"));
};