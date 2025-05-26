const s = "abcz";
const k = 2;
const stringToArray = s.split("");//["a", "b", "c", "z"]


const lettersToNumbers = stringToArray.map((x) => x.charCodeAt(0) - 96);//[1, 2, 3, 26]
const numbersToString = lettersToNumbers.map(num => num.toString());//["1", "2", "3", "26"]
const stringToArray2 = numbersToString.map(char => char.split(""));//[[ '1' ], [ '2' ], [ '3' ], [ '2', '6' ]]
const flattenedArray = stringToArray2.flatMap(a => a.map(b => Number(b)));//[ 1, 2, 3, 2, 6 ]
let xx;
xx = flattenedArray.reduce((acc, z) => acc + z,0).toString();//14

if (xx.length === 1 || k === 1) {
    xx = parseInt(xx);
} else {
    for (let i = 1; i < k; i++) {
        xx = xx.toString().split("").map(x => Number(x)).reduce((acc, z) => acc + z,0).toString();
    }
    xx = parseInt(xx);
}
console.log(xx);