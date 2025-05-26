const word = "abcdefd";
const ch = "d";

if (word.indexOf(ch) === -1) {
    return word;
} else {
    const index = word.indexOf(ch);
    const sliced = word.slice(0, index + 1);
    const reversed = sliced.split("").reverse().join("");
    const remaining = word.slice(index + 1);
    const final = reversed + remaining;
    return final;
}
console.log(final);



