const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {
        "user": "Garfloveslasagna",
        "chirp": "I hate mondays"
    },
    {
        "user": "Sportm4n",
        "chirp": "played some sports today"
    },
    {
        "user": "SirLewisHamilton",
        "chirp": "Time to win another championship"
    },
    {
        "user": "BamaLover",
        "chirp": "I hate Auburn"
    },
    {
        "user": "DaW3lder",
        "chirp": "No weak welds here!"
    }
]

// fs.writeFile('chirps.json', JSON.stringify(chirps),(err) => {
//     if (err) console.log(err);
// })

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, chirps) => {

console.log(chirps)

});