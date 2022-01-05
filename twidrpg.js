import { twidrpg } from "./module/config.js"
import TwidRpgActorSheet from "./module/sheets/TwidRpgActorSheet.js";

Hooks.once("init", () => {
    console.log("Initializing TwidRpg");

    CONFIG.twidrpg = twidrpg;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("twidrpg", TwidRpgActorSheet, { makeDefault: true });
});

Hooks.once("ready", () => {
    console.log("Aqui deberia crear la mariquera");

    console.log(game.tables);

    let spellsData = twidrpg.tables.spells;

    let results = spellsData.results.map((element, index) => {
        return {
            type: 0,
            text: element,
            weight: 1,
            range: [
                index + 1,
                index + 1
            ],
            drawn: false,
            flags: {},
            img: "icons/svg/d20-black.svg",
            rangeL: index + 1,
            rangeH: index + 1
        }
    });

    let tableData = {
        name: spellsData.name,
        img: spellsData.img,
        description: spellsData.description,
        results,
        formula: spellsData.formula
    };

    RollTable.create(tableData);
    
});