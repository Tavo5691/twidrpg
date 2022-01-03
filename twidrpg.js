import { twidrpg } from "./module/config.js"
import TwidRpgActorSheet from "./module/sheets/TwidRpgActorSheet.js";

Hooks.once("init", () => {
    console.log("Initializing TWID");

    CONFIG.twidrpg = twidrpg;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("the-wicth-is-dead", TwidRpgActorSheet, { makeDefault: true });
});