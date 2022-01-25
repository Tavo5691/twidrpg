export const twidrpg = {};

twidrpg.species = {
    fox: "twidrpg.species.fox",
    cat: "twidrpg.species.cat",
    toad: "twidrpg.species.toad",
    spider: "twidrpg.species.spider",
    owl: "twidrpg.species.owl",
    hare: "twidrpg.species.hare",
    magpie: "twidrpg.species.magpie",
    crow: "twidrpg.species.crow",
    dog: "twidrpg.species.dog",
    rat: "twidrpg.species.rat"
}

twidrpg.tables = [
    {
       name: "twidrpg.tables.spells.name",
       img: "icons/svg/book.svg",
       description: "twidrpg.tables.spells.description",
       results: [
            "twidrpg.spells.hand",
            "twidrpg.spells.light",
            "twidrpg.spells.speak",
            "twidrpg.spells.lock",
            "twidrpg.spells.dinner",
            "twidrpg.spells.flame",
            "twidrpg.spells.tidy",
            "twidrpg.spells.plant",
            "twidrpg.spells.distract",
            "twidrpg.spells.book"
    ],
       formula: "1d10",
       displayRoll: true
    },
    {
        name: "twidrpg.tables.species.name",
        img: "icons/svg/eye.svg",
        description: "twidrpg.tables.species.description",
        results: [
            "twidrpg.species.fox",
            "twidrpg.species.cat",
            "twidrpg.species.toad",
            "twidrpg.species.spider",
            "twidrpg.species.owl",
            "twidrpg.species.hare",
            "twidrpg.species.magpie",
            "twidrpg.species.crow",
            "twidrpg.species.dog",
            "twidrpg.species.rat"
        ],
        formula: "1d10",
        displayRoll: true
    },
    {
        name: "twidrpg.tables.village.name",
        img: "icons/svg/village.svg",
        description: "twidrpg.tables.village.description",
        results: [
            "twidrpg.tables.village.results.one",
            "twidrpg.tables.village.results.two",
            "twidrpg.tables.village.results.three",
            "twidrpg.tables.village.results.four",
            "twidrpg.tables.village.results.five",
            "twidrpg.tables.village.results.six",
            "twidrpg.tables.village.results.seven",
            "twidrpg.tables.village.results.eight",
            "twidrpg.tables.village.results.nine",
            "twidrpg.tables.village.results.ten"
        ],
        formula: "1d10",
        displayRoll: false
    },
    {
        name: "twidrpg.tables.witchHunter.name",
        img: "icons/svg/mystery-man.svg",
        description: "twidrpg.tables.witchHunter.description",
        results: [
            "twidrpg.tables.witchHunter.results.one",
            "twidrpg.tables.witchHunter.results.two",
            "twidrpg.tables.witchHunter.results.three",
            "twidrpg.tables.witchHunter.results.four",
            "twidrpg.tables.witchHunter.results.five",
            "twidrpg.tables.witchHunter.results.six",
            "twidrpg.tables.witchHunter.results.seven",
            "twidrpg.tables.witchHunter.results.eight",
            "twidrpg.tables.witchHunter.results.nine",
            "twidrpg.tables.witchHunter.results.ten"
        ],
        formula: "1d10",
        displayRoll: false
    },
    {
        name: "twidrpg.tables.twist.name",
        img: "icons/svg/lightning.svg",
        description: "twidrpg.tables.twist.description",
        results: [
            "twidrpg.tables.twist.results.one",
            "twidrpg.tables.twist.results.two",
            "twidrpg.tables.twist.results.three",
            "twidrpg.tables.twist.results.four",
            "twidrpg.tables.twist.results.five",
            "twidrpg.tables.twist.results.six",
            "twidrpg.tables.twist.results.seven",
            "twidrpg.tables.twist.results.eight",
            "twidrpg.tables.twist.results.nine",
            "twidrpg.tables.twist.results.ten"
        ],
        formula: "1d10",
        displayRoll: false
    }
];