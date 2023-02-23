function solution(a, b, c){
    let answer;
    
    if(a < b) answer = a; // a가 작으면 answer 은 a
    else answer = b; // a가 아니라면 b
    if(c < answer) answer = c; // 위 if문에서 나온 answer(a or b)보다 c가 작으면 answer 은 c

    return answer;
}

console.log(solution(2, 5, 1)); // 1
