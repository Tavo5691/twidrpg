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
       name: "Spells",
       img: "icons/svg/book.svg",
       description: "Your witch taught you a spell",
       results: [
           "Unseen Hand",
           "Conjure Light",
           "Speak Human",
           "Lock/Unlock, Open/Close",
           "Conjure Dinner",
           "Make Flame",
           "Tidy, Clean and Mend",
           "Plant Growth",
           "Distract/Confuse",
           "Make Book Read Itself Aloud"
       ],
       formula: "1d10"
    },
    {
        name: "Species",
        img: "icons/svg/eye.svg",
        description: "Roll a d10 to see what you are",
        results: [
            "Fox",
            "Cat",
            "Toad",
            "Spider",
            "Owl",
            "Hare",
            "Magpie",
            "Crow",
            "Dog",
            "Rat"
        ],
        formula: "1d10"
     }
];