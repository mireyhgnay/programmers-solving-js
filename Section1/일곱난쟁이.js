function solution(arr){
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0); // 배열 총 합 구하기
    
    // 이중 for문
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if((sum - (answer[i] + answer[j])) === 100){
                answer.splice(j, 1); // 뒤에 j 를 먼저 지워야 인덱스 번호가 당겨져도 영향 없음
                answer.splice(i, 1);
            }
        }
    }
    return answer;
}

// 문제 
let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));