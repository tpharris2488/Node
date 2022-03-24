const path = require('path');
const fs = require('fs');
const rp = require('request-promise');


let dataPath = path.join(__dirname, '/popular-articles.json');

rp("https://reddit.com/r/popular.json", (err, res, body) => {

    if (err) console.log(err);
    
    const redditArr = [];
    
    JSON.parse(body).data.children.forEach(item => {
        const article = {
            title: item.data.title,
            author: item.data.author,
            url: item.data.url
        };
        redditArr.push(article);
    });

    const redditArticlesJSON = JSON.stringify(redditArr)
    fs.appendFileSync(dataPath, redditArticlesJSON);
    
});