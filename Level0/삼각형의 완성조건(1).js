const solution = (sides)=> {
    sides.sort((a, b) => a - b); // 오름차순으로 정렬
    return (sides[0] + sides[1] > sides[2] ? 1 : 2)
}

// other solution - Math.max(), reduce()
function solution(sides) {
    let answer = 0;
    // Math.max - 배열 중 최댓값을 반환한다.
    const max = Math.max(...sides);
    // reduce - 배열의 모든 요소들에 대해서 연산을 수행하여 하나의 결과 값을 리턴한다.
    const sum = sides.reduce((a,b) => a + b, 0) - max;

    answer = max < sum ? 1 : 2;

    return answer;
}