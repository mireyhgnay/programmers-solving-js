function solution(n) {
    let answer = '';
    const soo = '수';
    const bak = '박';
    
    for (let i = 1; i <= n; i++){
        if(i % 2 === 0) {
            answer += bak;   
        } else {
            answer += soo;
        }
    }
    
    return answer;
}

// best solution
const solution = n => "수박".repeat(n).substr(0, n);

// String.prototype.repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.