function solution(s) {
    var answer = '';
    
    if (s.length % 2 == 0 ) { // 짝수일 경우,
        // [1],[2] 원소
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        // [3] 원소
        answer = s[Math.floor(s.length/2)]; // 홀수일 경우
    }
    return answer;
}

// best solution 
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// substr : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환합니다.
// Math.ceil : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.