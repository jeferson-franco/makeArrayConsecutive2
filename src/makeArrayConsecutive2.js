function solution(statues) {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let count = 0;
    for (let i = min; i <= max; i++) {
        if (!statues.includes(i)) {
            count++;
        }
    }
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test makeArrayConsecutive2

// alternative solution
// function solution(statues) {
//     return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
// }

// alternative solution
// function solution(statues) {
//     return Math.max.apply(null, statues) - Math.min.apply(null, statues) + 1 - statues.length;
// }
