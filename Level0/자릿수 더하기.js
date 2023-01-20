function solution(n) {
    let answer = 0; 
    n = n.toString(); // 숫자를 문자열로 바꿔준다.
    
    for (let i = 0; i < n.length; i++) {
        // n의 인덱스 값의 문자를 parseInt()함수를 이용해 정수로 반환
        // 반환한 값들을 모두 덧셈
        answer += parseInt(n[i]);
    }
    
    return answer;
}

/* 
    toString() : 문자열을 반환하는 object의 대표적인 방법
*/