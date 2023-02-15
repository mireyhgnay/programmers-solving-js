function solution(n, m) {
    // let answer = [];
    let greatest = 0; // 최대공약수
    let least = 0; // 최대공배수
    
    let num = n > m ? n : m; // 둘 중 큰 수의 길이를 for문에 적용할 것임
    
    for(let i = 1; i < num; i++){
        if(n % i === 0 && m % i === 0) { // 최대공약수 구하기
            greatest = i;
        }
    }
    
    // 최소공배수 구하기
    least = n * m / greatest; 
    return [greatest, least];
}