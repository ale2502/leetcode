const strings = ["flower","flow","flight"];
const arrayLength = strings.length;
const shortestString = Math.min(...strings.map(x => x.length));
let result = '';
let currentString = '';
// arrayLength = 3
// shortesString = 4
if (arrayLength > 1) {
    for (let j = 0; j < shortestString; j++) {
        for (let i = 1; i < arrayLength; i++) {
            if (strings[0][j] === strings[i][j]) {
                currentString = strings[0][i - 1];
                result += currentString;
            } else {
                return "";
            }
        }
    }
} else {
    return strings[0];
}
console.log(result);