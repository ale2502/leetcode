const s = "leetcode";
const k = 2;

let xx;
xx = s.split("").
       map((x) => x.charCodeAt(0) - 96).
       map(num => num.toString()).
       map(char => char.split("")).//["a", "b", "c", "z"]
       flatMap(a => a.map(b => Number(b))).
       reduce((acc, z) => acc + z,0).
       toString();

if (xx.length === 1 || k === 1) {
    xx = parseInt(xx);
} else {
    for (let i = 1; i < k; i++) {
        xx = xx.toString().
                split("").
                map(x => Number(x)).
                reduce((acc, z) => acc + z,0).
                toString();
    }
    xx = parseInt(xx);
}
return xx;
