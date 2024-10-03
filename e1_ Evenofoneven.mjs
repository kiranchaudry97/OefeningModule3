import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let getal = 0;
let getal1 = 0;

while(getal != 20){
    console.log(getal);
    getal += 2;
    let getal1 = await userInput.question('even getal');
    console.log('het is een even getal');
}

if (getal1 != 21){
    getal1 += 3;
    let getal = await userInput.question('oneven getal');
    console.log('het is een onveven getal');
}

console.log('het is een onveven getal');

userInput.close();

