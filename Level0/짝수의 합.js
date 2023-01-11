function solution(n) {
    let answer = 0;
    
    for (let i = 0; i <= n; i++){
        if(i % 2 === 0){ // 배열 중 짝수만 선택하기
            answer += i; // 선택된 짝수 더하기
        }
    }
    
    return answer;
}