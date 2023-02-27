function solution(arr){  
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = 0;
    let sum2 = 0;

    // 행과 열 최대값 구하기
    for(let i = 0; i < n; i++){
        sum1 = sum2 = 0;
        for(let j = 0; j < n; j++){
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2); // 셋 중 가장 큰 수 반환
    }

    sum1 = sum2 = 0;

    // 대각선 최대값 구하기
    for(let i = 0; i < n; i++){
        sum1 += arr[i][i];
        sum2 += arr[i][n-i-1];
    }  
    answer = Math.max(answer, sum1, sum2); 

    return answer;
}

// 머리 지끈했던 문제...