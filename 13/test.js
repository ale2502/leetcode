const intoArray = s.split("");
const replaceToIntegers = intoArray.map(rom => {
    if (rom === "I") return 1;   
    else if (rom === "V") return 5;  
    else if (rom === "X") return 10;  
    else if (rom === "L") return 50;    
    else if (rom === "C") return 100;      
    else if (rom === "D") return 500;
    else return 1000;
})

let total = 0;
let i = 0;

while (i < replaceToIntegers.length) {
    const current = replaceToIntegers[i];
    const next = replaceToIntegers[i + 1];

    if (next > current) {
        total = total + next - current;
        i = i + 2;
    } else {
        total = total + current;
        i = i + 1;
    }
}