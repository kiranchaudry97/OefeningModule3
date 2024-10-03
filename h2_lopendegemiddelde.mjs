import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let som = 0;       
let aantal = 0;       
let gemiddelde = 0;   

while (gemiddelde <= 25) {
    let getal = await userInput.question('Geef een getal: ');

    
    getal = parseFloat(getal);  
    if (getal == 0|| getal == "" || (getal)) {  
        console.log("het is geen geldige getal. Voer een geldig getal in.");
        
    }

    som += getal;
    aantal++;
    gemiddelde = totaal / aantal;

    console.log("de gemiddelde van de getal is :" + gemiddelde);
}


console.log("Het gemiddelde is nu boven de 25.");
userInput.close();  