const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const instream = fs.createReadStream('./input.txt');
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);

const arr = [];

rl.on('line', (line) => {
  // read each line to array as number
  arr.push(parseInt(line));
});

rl.on('close', () => {
  // Sort array once populated
  arr.sort((a,b) => a-b)

  let success = false;
  let count=0;

  for(let i=0; i<arr.length; i++) {
    if(success) {
        break;
    }
    for(let j=i+1; j<arr.length; j++) {
        count++;
        if(arr[i] + arr[j] === 2020) {
            console.log(`Numbers are ${arr[i]} and ${arr[j]}, their product is ${arr[i] * arr[j]}.  It took ${count} iterations.`);
            success = true;
            break;
        }
        if(arr[i] + arr[j] > 2020) {
            break;
        }
    }
  }
  
});
