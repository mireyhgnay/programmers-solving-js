function solution(numbers) { 
    let arr = [];
    
    // j가 무조건 i보다 큰 수에서 시작해서 인덱스별로 더하기
    for(let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            
            // 중복된 숫자 제거하기
            // indexOf를 사용해서 answer 배열에 내가 구한 합이 없다면 그 수를 추가
            if(arr.indexOf(sum) === -1) {
                arr.push(sum);
            }
        }
    }
    
    // 오름차순 정렬
    return arr.sort((a, b) => a - b);
}

// best solution
function solution(numbers) {
    const temp = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

// new Set() : Set은 중복이 허용되지 않는 객체이다. 안에 이미 같은 값이 존재한다면 추가되지 않는다.