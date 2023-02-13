// best solution
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { // 제곱근이 정수면 약수의 개수는 홀수
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

// Number.inInteger() : 주어진 값이 정수인지 판별합니다.
// Math.sqrt() : 숫자의 제곱근을 반환합니다.