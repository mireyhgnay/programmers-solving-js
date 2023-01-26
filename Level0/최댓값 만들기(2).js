function solution(numbers) {
    let answer = [];
    
    // 배열의 index는 0부터 시작하기 때문에, 마지막 index 값은 length - 1 입니다.
    for(let i = 0; i < numbers.length - 1; i++){ 
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]); // 곱한 것들을 더해서 배열에 추가
        }
    }
    
    return Math.max(...answer); // 각 원소들을 곱한 것들 중 최댓값 반환
}