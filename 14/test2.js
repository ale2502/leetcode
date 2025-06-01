const strings = ["flower", "flow", "flight"];
const arrayLength = strings.length;
const shortestString = Math.min(...strings.map(x => x.length));
let result = '';

if (arrayLength > 1) {
  for (let j = 0; j < shortestString; j++) {
    for (let i = 1; i < arrayLength; i++) {
      if (strings[0][j] !== strings[i][j]) {
        // mismatch found → stop everything
        console.log(result);
        return;
      }
    }
    // if we got here, all strings matched at position j
    result += strings[0][j];
  }
} else {
  result = strings[0];
}

console.log(result); // "fl"