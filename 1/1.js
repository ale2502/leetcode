const nums = [2, 3, 4, 6, 9];
const target = 11;
const results = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        while (nums[i] + nums[j] === target) {
            console.log([i, j])
            break;
        }
    }
}