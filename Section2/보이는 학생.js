function solution(arr){         
    let answer = 1; // 맨앞에있는 사람(인덱스)는 무조건 보이는것
    let max = arr[0]; 

    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            answer++; // 카운팅 증가
            max = arr[i]; // 배열을 쭉 돌면서 가장 큰 수(큰 사람)를 max 로 지정
        }
    }

    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr)); // 5