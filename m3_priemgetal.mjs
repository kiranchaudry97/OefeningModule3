import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let hoogte = 3;  

for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        process.stdout.write(" ");
    }

    for (let ster = 0; ster < 2 * tellerhoogte + 1; ster++) {
        process.stdout.write("*");
    }

    console.log(""); 
}

for (let tellerhoogte = hoogte - 2; tellerhoogte >= 0; tellerhoogte--) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        process.stdout.write(" ");
    }

    for (let ster = 0; ster < 2 * tellerhoogte + 1; ster++) {
        process.stdout.write("*");
    }

    console.log(""); 
}



userInput.close();