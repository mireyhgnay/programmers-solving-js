// 소수인지 확인하는 방법
function isPrime(num){
    if(num === 1) return false; // 예외처리
    for(let i = 2; i <= parseInt(Math.sqrt(num)); i++){
        // 소수 : 자기 자신 외에 나누어 떨어지면 소수가 아니다.
        if(num % i === 0) return false;
    }
    return true;
}

// 소수 판별 후, 숫자 뒤집기
function solution(arr){
    let answer = [];
    for(let x of arr){
        let res = 0;
        while(x){
            let t = x % 10;
            res = res * 10 + t;
            x = parseInt(x / 10); 
        }
        // 소수일 경우에만 answer 에 추가
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}