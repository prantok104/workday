const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';
const makeCommit = n => {
    if (n === 0) return simpleGit().push();
    const x = random.int(0, 4);
    const y = random.int(0, 6);
    const DATE = moment().subtract(0, 'y').subtract(0, 'M').subtract(x, 'w').subtract(y, 'd').format();
    const data = {
        date: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
    });
}
makeCommit(100);
