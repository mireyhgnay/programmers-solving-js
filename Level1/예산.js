function solution(d, budget) {
    let answer = 0
    let sum = 0;

    d.sort((a,b) => a - b);

    for(let i = 0; i < d.length; i++){
        answer++;
        sum += d[i];

        if(sum > budget) answer--;
    }
  
    return answer;
}

// best solution 
function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

// reduce() : 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
// pop() : 배열에서 마지막 요소를 제거하고 그 요소를 반환