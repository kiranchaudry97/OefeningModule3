import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let som = 0; 

while (true) { 
    let getal = parseFloat(await userInput.question('Geef een getal 1 :'));
  
    

    if (getal <= 0) {
        break; 
    }

    som += getal; 
}

console.log("De totale som is: " + som);

userInput.close();