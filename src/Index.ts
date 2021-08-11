/* */

import { Client } from 'discord.js';
import { helloworldCommand } from './commands/hello-world';
import { AlexStatus } from './events/AlexStatus';
import { messageReady } from './events/messageReady';
import { logger } from './logs/logger';
import { SetAlexSettings } from './Utilities/AlexSettings';

export const AlexClient = new Client();

export async function AlexLogin() {
      return AlexClient.login(SetAlexSettings.alexToken).then(() => {
            console.log(`${AlexClient.user?.tag} Online em ${AlexClient.guilds.cache.size} guildas!`);
      });
};

export async function AlexLoggerEvent() {
      return AlexClient.on('message', logger);
};

export async function AlexCommandsEvent() {
      return AlexClient.on('message', helloworldCommand);
};

export async function AlexStatusEvent() {
      return AlexClient.on('ready', AlexStatus);
};

setTimeout(() => {
      AlexLogin(), AlexStatusEvent(), AlexLoggerEvent(), AlexCommandsEvent();
}, 100);