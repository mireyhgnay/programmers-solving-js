function solution(a, b) {
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    
    return answer;
}


// other solution - map, reduce
function solution(a, b) {
    return (a.map((cur,i) => cur * b[i])).reduce((a, b) => a + b);
    //map으로 a[i]*b[i] 하고 reduce로 모든 요소 합 구하기
}

// map() : 배열 내 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
// reduce() : 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.