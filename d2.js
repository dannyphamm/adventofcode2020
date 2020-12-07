const fs = require('fs');

const lines = fs.readFileSync('d2.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

let total = 0;
let total2 = 0;
lines.forEach(line => {
    const { groups } = /^(?<min>\d+)-(?<max>\d+) (?<character>.): (?<password>.*)/.exec(line);
    const count = {};
    [...groups.password].forEach(character => {
        if (!count[character])
            count[character] = 0;
        count[character]++;
    });

    if (count[groups.character] >= groups.min && count[groups.character] <= groups.max)
        total++;
})

console.log(total);

lines.forEach(line => {
    const { groups } = /^(?<min>\d+)-(?<max>\d+) (?<character>.): (?<password>.*)/.exec(line);

    if (groups.password[groups.min-1] == groups.character ^ groups.password[groups.max-1] == groups.character)
        total2++;
})

console.log(total2);