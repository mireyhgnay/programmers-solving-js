function solution(numbers) {
    const answer = 0;
    const sum = 0;
    
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]; // 배열의 요소들을 하나씩 더하고
    }
    
    return answer = sum / numbers.length; // 배열 갯수로 나눠주기
}

// solution2 - reduce() 사용
// reduce() : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.
function solution(numbers) {
    return numbers.reduce((sum, current) => sum + current) / numbers.length;
}
