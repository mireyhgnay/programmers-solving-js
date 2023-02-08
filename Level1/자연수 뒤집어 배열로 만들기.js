function solution(n) {
    return String(n).split('').reverse().map(num => Number(num));
}

// String(n) : 숫자를 문자열로 변환 (문자열로 변경해야 배열로 변환 가능)
// split('') : 배열로 변환
// reverse() : 배열 원소 순서 뒤집기
// map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환