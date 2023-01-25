function solution(my_string) {
    let regex = /\d/g;
    return my_string.match(regex).sort((a, b) => a - b).map(n => Number(n));
}

/*
    - 정규식 : 문자열에서 숫자만 추출하기! d가 0 ~ 9의 숫자를 의미한다.
    - match : 정규식 조건에 맞는 것들을 배열로 만들어준다.
    - sort : 오름차순 정렬 (그냥 sort를 사용하면 배열을 문자열로 바꾼 후에 정렬되므로 비교함수 인자로 넣어줘서 반환해야한다.)
    - map : 배열 내 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
    - Number : 문자열을 숫자로 변환하는 함수
*/