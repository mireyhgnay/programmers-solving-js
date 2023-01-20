function solution(n) {
    let answer = 0; 
    n = n.toString(); // 숫자를 문자열로 바꿔준다.
    // toString() : 문자열을 반환하는 object의 대표적인 방법
    
    for (let i = 0; i < n.length; i++) {
        // n의 인덱스 값의 문자를 parseInt()함수를 이용해 정수로 반환
        // 반환한 값들을 모두 덧셈
        answer += parseInt(n[i]);
    }
    
    return answer;
}

// other solution - split / toString / reduce
function solution(n) {
    return n
      .toString() // 문자열로 변환
      .split("") // 문자열을 배열로 변환
      .reduce((acc, cur) => acc + Number(cur), 0);
      // reduce() : 배열의 각 요소에 대해 리듀서 함수를 실행하여 결과값 반환
}