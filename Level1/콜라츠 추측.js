function solution(num) {
    let answer = 0;
    
    // while : 조건문이 참일 때 실행되는 반복문
    while (num != 1 && answer != 500) { // num이 1과 500이 아니라면
        // 짝수인 경우, 2를 나누고
        // 홀수인 경우, 3 곱하고 1을 더한다
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        answer++;
    }
    
    return num == 1 ? answer : -1;
}

// other solution - while, if문
// while, if를 같이 사용하여 더 이해하기 쉽도록 하였다.
function solution(num) {
    var count = 0;

    while (count < 500) {
        if (num === 1) {
            return count;
        }
        count ++;
        num = num % 2 === 0 ? num /2 : num *3 +1;
    }

    return -1;
}