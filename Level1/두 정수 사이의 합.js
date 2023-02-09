function solution(a, b) {
    let answer = 0;
    const min = Math.min(a, b); // a, b 중 가장 작은 값을 반환
    const max = Math.max(a, b); // a, b 중 가장 큰 값을 반환
    for(let i= min; i <= max; i++){
        answer += i;
    }
    return answer;
}

// other solution - Math.abs
function adder(a, b){
    let result = 0
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}
// Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다.
// x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.
