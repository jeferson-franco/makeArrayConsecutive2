function solution(statues) {
    var min = Math.min(...statues);
    var max = Math.max(...statues);
    var count = 0;
    for (var i = min; i <= max; i++) {
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
