function solution(n) {
    let answer = [];
    
    for(let i = 0; i <= 10000; i++){
        // 나머지 없이 딱 떨어지는 수 일때,(약수)
        if(n % i === 0) {
            answer.push(i);
        }
    }
    
    return answer.sort((a, b) => a - b);
}

// other solution 
const solution = n => {
    Array(n).fill(0).map((v, index) => v + index + 1).filter((v) => n % v === 0);
}