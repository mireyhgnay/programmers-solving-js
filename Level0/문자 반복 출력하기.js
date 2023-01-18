function solution(my_string, n) {
    const string = my_string.split(''); // 문자열을 배열로 변환
    const repeat = string.map(text => text.repeat(n));
    // repeat함수 - 주어진 문자열을 옵션의 count만큼 반복하여 붙인 다음에 새로운 문자열로 반환하는 함수입니다.

    return repeat.join('');
}

// other solution - 내 풀이 축약한 코드
const solution = (my_string, n) => [...my_string].map(a => a.repeat(n)).join("")