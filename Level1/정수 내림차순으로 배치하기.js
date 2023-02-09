function solution(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''));
}

// toString() : 문자열로 변환 (문자열이여야 배열로 변환할 수 있음)
// split('') : 배열로 변환
// sort() : 배열 정렬하기 (오름차순(a-b), 내림차순(b-a), ..)
// join('') : 배열 문자열 합치기
// Number() : 숫자로 변환