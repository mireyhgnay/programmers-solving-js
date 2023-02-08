function solution(n) {
    // 제곱근 판별하기
    const sqrt = Math.sqrt(n);
    
    if ( sqrt % 1 == 0 ) { // 제곱근일 경우
        return answer = Math.pow(sqrt + 1, 2);
        // 숫자가 2라면, 2번 곱하고(2 * 2 = 4), 1 더하기(5)
        // Math.pow(base, exponent): base 에 exponent를 제곱한 값을 반환
    }
    
    return -1;
}


// other solution - 삼항 연산자를 이용한 풀이
const solution = n => Math.sqrt(n) % 1 == 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;