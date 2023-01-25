function solution(n) {
    let answer = 0;
    let sqrt = Math.sqrt(n); // 제곱근 반환
    if(sqrt % 1 === 0){ // 나머지를 이용해 소숫점 판별, 제곱근일 경우
        return answer = 1;
    } else {
        return answer = 2;
    }
}

// other solution - isInteger
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
    // Number.isInteger() : 주어진 값이 정수인지 판별합니다.
}