function solution(numbers) {
    let answer = 0;
    
    for(let i = 0; i <= 9; i++) {
        // numbers에 포함 되어있지 않은 수를 더하라
        if(!numbers.includes(i)) answer += i;
    }
    
    return answer;
}