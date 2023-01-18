function solution(numbers) {
    numbers.sort((a, b) => b - a); // 오름차순 정렬
    return numbers[0] * numbers[1]; // 오름차순 정렬된 배열의 0, 1 인덱스 곱하기
}