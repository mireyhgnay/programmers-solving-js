// solution - 풀어써서 이해하기 좋았던 코드..
function solution(a, b) {
    for(let k = 2; k <= Math.min(a, b); k++){
        while((a % k == 0) && (b % k == 0)) {
           a = Math.floor(a / k); 
           b = Math.floor(b / k);
        }
    }

    while(b % 2 == 0 || b % 5 == 0 ) {
        if( b % 2 == 0) b = Math.floor(b / 2);
        if( b % 5 == 0) b = Math.floor(b / 5);
    }

    return b == 1 ? 1 : 2;
}

// best solution
function solution(a, b) {
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
    // toFixed() : 숫자를 고정 소수점 표기법으로 표시합니다.
}