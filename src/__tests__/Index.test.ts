/* */

import { messageReady } from "../handlers/messageReady";
import { AlexLogin } from "../Index";
import { SetAlexSettings } from "../Utilities/AlexSettings";

describe('Tentando fazer login com o Alex', (() => {
      jest.spyOn(console, "log");
      it('Primeiro teste', (() => {
            AlexLogin();
            messageReady();
            expect(console.log).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith("Alex está online!");
      }));
}));