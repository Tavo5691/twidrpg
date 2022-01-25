import { twidrpg } from "./module/config.js"
import { initializeRollTables } from "./module/helpers/initialize-roll-tables.js";
import TwidRpgActorSheet from "./module/sheets/TwidRpgActorSheet.js";

Hooks.once("init", () => {
    console.log("Initializing TwidRpg");

    CONFIG.twidrpg = twidrpg;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("twidrpg", TwidRpgActorSheet, { makeDefault: true });
});

Hooks.once("ready", () => {
    initializeRollTables();
});