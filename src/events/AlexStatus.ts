/* */

import { AlexClient } from '../Index';

export async function AlexStatus() {
      return AlexClient.user?.setActivity("Tô depressão", {
            type: "STREAMING",
            url: "https://www.twitch.tv/ricksanchez"
      });
};