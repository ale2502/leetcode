const arrayLength = strs.length;
const shortestString = Math.min(...strs.map(x => x.length));
let result = '';

if (arrayLength > 1) {
  for (let j = 0; j < shortestString; j++) {
    for (let i = 1; i < arrayLength; i++) {
      if (strs[0][j] !== strs[i][j]) {
        // mismatch found → stop everything
        return result;
      }
    }
    // if we got here, all strings matched at position j
    result += strs[0][j];
  }
} else {
  result = strs[0];
}
return result;