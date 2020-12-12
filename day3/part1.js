const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString('utf-8');
const data = input.split('\n');

const coord = [0,0]
let encounteredTrees = 0;
const rowWidth = data[0].split('').length - 1;
const dataLength = data.length - 1;

for(let i = 0; i < dataLength; i++){
    // Increment coords
    coord[0] = coord[0] + 3 > rowWidth ? coord[0] + 2 - rowWidth : coord[0] + 3;
    coord[1] = coord[1] + 1;
    // Get the target position from current position
   const row = data[coord[1]].split('');
   const target = row[coord[0]];
   if(target === '#'){
       encounteredTrees++;
   }
}
console.log(encounteredTrees)