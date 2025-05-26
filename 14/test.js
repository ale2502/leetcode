const strs = ["a", "a"];
const arrayOfArray = strs.map(str => str.split(""));

let n = 0;

while (arrayOfArray[0][0] === arrayOfArray[n][0]) {
    n++;
    
}