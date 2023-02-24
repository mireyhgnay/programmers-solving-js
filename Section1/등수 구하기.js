function solution(arr){  
    let n = arr.length;
    let answer = Array.from({length:n}, () => 1); // 주어진 배열 길이와 초기화 1 배열 설정

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            // arr[i] 가 주인공이라고 생각하고, 
            // arr[j]로 배열을 쭉 돌면서 arr[i] 보다 큰 수를 찾으면 
            // 카운팅 +1 (등수 올라감)
            if(arr[j] > arr[i]) answer[i]++;
        }
    }             
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr)); // 4 3 2 1 5