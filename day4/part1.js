const fs = require('fs');

const requiredPassportAttributes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const input = fs.readFileSync('./input.txt').toString('utf-8');
const data = input.split('\n\n');
const formattedData = data.map(d => {
    // Remove remaining new line characters from passport data
    return d.replace(/\n/g,' ').split(' ').map(a => {
        // Only retain passport attribute keys
       return a.split(':')[0]
    })
});

let count=0;

for(let i = 0; i<formattedData.length; i++){
   for(let j = 0; j<requiredPassportAttributes.length; j++){   
     const valid = formattedData[i].includes(requiredPassportAttributes[j]);
     if(!valid) break;
     if(j===requiredPassportAttributes.length-1) count++;
   }
}

console.log(count)