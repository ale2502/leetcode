const strings = ["flower","flow","flight"];
const arrayLength = strings.length;
const shortestString = Math.min(...strings.map(x => x.length));
let j = 0;
// arrayLength = 3
// shortesString = 4
if (arrayLength > 1) {
    for (let j = 0; j = arrayLength; j++) {
        for (let i = 1; i < arrayLength; i++) {
            if (strings[0][j] === strings[i][j]) {
                first = string[0][0];
            } else {
                return "";
            }
        }
    }
} else {
    return string[0];
}



console.log(arrayLength);