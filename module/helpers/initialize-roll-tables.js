export const initializeRollTables = (loadedTables, tablesFromConfiguration) => {
    const missingTables = filterOutAlreadyLoadedTables(loadedTables, tablesFromConfiguration);

    missingTables.forEach(table => {
        let results = buildPossibleResults(table);
    
        let tableData = {
            name: table.name,
            img: table.img,
            description: table.description,
            results,
            formula: table.formula
        };
    
        RollTable.create(tableData);
    });
};

const filterOutAlreadyLoadedTables = (loadedTables, tablesFromConfiguration) => {
    const loadedTablesNames = Object.values(loadedTables)[0][0].documents.map(table => {
        return table.data.name
    });

    return tablesFromConfiguration.filter(table => {
        return !loadedTablesNames.includes(table.name);
    });
};

const buildPossibleResults = (table) => {
    return table.results.map((element, index) => {
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
            img: "icons/svg/d10-grey.svg",
            rangeL: index + 1,
            rangeH: index + 1
        }
    });
};