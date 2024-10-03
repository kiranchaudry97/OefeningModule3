import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
   

let getal1 = 0;


for (let getal = 1; getal <= 100; getal++) {
    
    if (getal % 3 === 0 && getal % 5 === 0) {
        console.log("FizzBuzz");
    } else if (getal % 3 === 0) {
        console.log("Fizz");
    } else if (getal % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(getal);
    }
}

userInput.close();