const fs = require('fs');

const lines = fs.readFileSync('d1.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));
let answer = 0;
let answer2 = 0;
for(let i = 0; i < lines.length; i++) {
    for(let j = 0; j < lines.length; j++) {
          if(lines[i] + lines[j] == 2020) {
             answer = lines[i] * lines[j];
         }
    }
}
console.log(answer);


for(let i = 0; i < lines.length; i++) {
    for(let j = 0; j < lines.length; j++) {
        for(let k = 0; k < lines.length; k++) {
          if(lines[i] + lines[j] + lines[k] == 2020) {
             answer2 = lines[i] * lines[j] * lines[k];
         }
        }
    }
}
console.log(answer2);