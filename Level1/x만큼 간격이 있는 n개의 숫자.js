function solution(x, n) {
    let answer = [];
    
    for (let i = 1; i <= n; i++){
        answer.push(x * i); // 배열에 추가
    }
    
    return answer;
}

// best solution
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}