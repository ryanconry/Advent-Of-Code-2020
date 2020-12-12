const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString('utf-8');
const data = input.split('\n');

let validPasswordCount = 0;

data.forEach(d => {
    let count=0;
    // Split the line into elements, bounds, target and password
    const elements = d.split(' ');
    // Format the target element
    const target = elements[1].replace(/:/g, '');
    // Split the password into characters
    const passwordCharacters = elements[2].split('');

    // Check that the target occurence in the positions
    const positions = elements[0].split('-');
    positions.forEach(p => passwordCharacters[p-1] === target && count++);
    if(count === 1){
        validPasswordCount++;
    }
})

console.log(`There are ${validPasswordCount} valid passwords.`);