function solution(arr, divisor) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      } else if(answer.length == 0) {
          answer.push(-1)
      }
    }
    
    answer.sort((a, b) => a - b);
    return answer;
}

// other solution - filter
function solution(arr, divisor) {
    let answer = arr.filter(v => v % divisor === 0);
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}