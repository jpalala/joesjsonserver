const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, './data'));

const db = {}

files.forEach(filename => {
    db[filename.split('.')[0]] = require(path.join(__dirname, './data', filename));
})

fs.writeFileSync(path.join(__dirname, './data/db.json'), JSON.stringify(db, null, 4))
