function solution(numbers, num1, num2) {
    let answer = numbers.slice(num1, num2 + 1);
    return answer;
}

/*
Array.prototype.slice()
배열의 일부분을 잘라내어 새로운 배열로 리턴합니다.
뒤 파라미터로 있는 자라낼 배열의 종료 값은 잘라낼 배열에 포함되지 않습니다.
*/