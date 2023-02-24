function solution(arr){         
    let answer = [];
    answer.push(arr[0]);

    for(let i=1; i<arr.length; i++){
        // 앞에 숫자보다 크면 배열에 추가
        if(arr[i] > arr[i-1]) answer.push(arr[i]);
    }
    return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr)); // 7, 9, 6, 12