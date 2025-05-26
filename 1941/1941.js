function countRepeatingCharacters(s) {
    const counts = {};
    for (let char of s) {
      counts[char] = (counts[char] || 0) + 1;
    }
    const values = Object.values(counts);
    const first = values[0];
    for (let count of values) {
      if (count !== first)
        return false;
    }
    return true;
  }