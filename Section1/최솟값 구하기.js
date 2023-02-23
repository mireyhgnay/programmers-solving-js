function solution(arr){         
    let answer;
    let min = Number.MAX_SAFE_INTEGER; // 안정적인 가장 큰 수를 지정

    for(let i=0; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr)); // 1