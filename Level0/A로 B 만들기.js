function solution(before, after) {
    const beforeText = [...before].sort().join('');
    const afterText = [...after].sort().join('');
    
    return beforeText === afterText ? 1 : 0;
}

// other solution
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}