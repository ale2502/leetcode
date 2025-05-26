function countRepeatingCharacters(s) {
  const counts = {};
  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }
  const values = Object.values(counts);
  const allEqual = values.every(count => count === values[0]);
}