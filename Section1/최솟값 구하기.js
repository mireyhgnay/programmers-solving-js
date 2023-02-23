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


// 배열 원소 중 최솟값,최댓값을 구해주는 Math 메서드 사용하기
function solution(arr){
    return Math.min(...arr);
    // 배열을 인자로 넣어줄때 그냥 arr 변수명으로 넣어주면 안되고 전개연산자(...)로 적어줘야함
    // arr[0], arr[1], arr[2] 이런식으로 넣어준 것
}