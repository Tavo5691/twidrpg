import { twidrpg } from "../config.js"

export const initializeRollTables = () => {
    clearRollTableDirectory();
    const tablesFromConfiguration = twidrpg.tables;

    tablesFromConfiguration.forEach(table => {
        let results = buildPossibleResults(table);
    
        let tableData = {
            name: game.i18n.localize(table.name),
            img: table.img,
            description: game.i18n.localize(table.description),
            results,
            formula: table.formula,
            displayRoll: table.displayRoll
        };
    
        RollTable.create(tableData);
    });
};

const clearRollTableDirectory = () => {
    const tables = game.tables.contents;

    RollTable.deleteDocuments(tables.map(table => table.id));
}

const buildPossibleResults = (table) => {
    return table.results.map((text, index) => {
        return {
            type: 0,
            text: game.i18n.localize(text),
            weight: 1,
            range: [
                index + 1,
                index + 1
            ],
            drawn: false,
            flags: {},
            img: "icons/svg/d10-grey.svg",
            rangeL: index + 1,
            rangeH: index + 1
        }
    });
};