function solution(n) {
    let array = [];

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) { // 나눴을 때 나머지가 0인 경우(i가 n의 약수인 경우)
            array.push(i); // 배열에 추가
        }
    }
    
    // 배열의 원소 더하기
    return array.reduce((a, b) => a + b, 0);
}