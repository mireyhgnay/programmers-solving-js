function solution(hp) { // hp가 23일 경우
    const first = Math.floor(hp / 5); // 장군개미(5) - 공격력 4
    const second = Math.floor((hp - first * 5) / 3); // 병정개미(3) - 공격력 1
    const third = hp - first * 5 - second * 3; // 일개미(1) - 공격력 0
    return first + second + third; // 4 + 1 + 0 = 5
}

// other solution (축약)
function solution(hp) {
    return Math.floor(hp/5) + Math.floor((hp%5) / 3) + (hp%5) % 3;
}