const strs = ["a", "a"];
const arrayOfArray = strs.map(str => str.split(""));
let first = "";
let second = "";

for (let i = 0; i < strs.length; i++) {
    if (arrayOfArray[0][0] === arrayOfArray[i][0]) {
        first = arrayOfArray[0][0];
    } else {
        return "";
    }
}
    for (i = 0; i < strs.length; i++) {
    if (arrayOfArray[0][1] === arrayOfArray[i][1]) {
        second = arrayOfArray[0][1];
    } else {
        return "";
    }
}
//return first + second;
console.log(first + " " + second);