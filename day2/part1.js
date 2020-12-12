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
    // Determine how many times the target is in the password
    passwordCharacters.forEach(p => p === target && count++);
    // Check that the target occurrence in the password is within bounds
    const bounds = elements[0].split('-');
    if(count >= bounds[0] && count <= bounds[1]){
        validPasswordCount++
    }
})

console.log(`There are ${validPasswordCount} valid passwords.`)