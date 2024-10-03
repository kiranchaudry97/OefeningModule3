import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let getal1 = await userInput.question (("Welke getal wil je berekenen? "));
let getal2 = await userInput.question (("Welke tweede getal wil je berekenen? "));

while (getal2 !== 0) {
    if (getal1 > getal2) {
        getal1 = getal1 - getal2;
    } else {
        getal2 = getal2 - getal1;
    }
}

console.log("De grootste gemene deler is" + getal1);

process.exit();