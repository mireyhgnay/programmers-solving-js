// 문제 : 글자수 홀수일 때는 1개, 짝수일 때는 가운데 2개 문자 출력
function solution(s){  
    let answer;
    let middle = Math.floor(s.length/2); // Math.floor : 소숫점 버림 (내림)

    // 문자열 갯수가 홀수인 경우
    if(s.length % 2 === 1) answer = s.substring(middle, middle+1); // substring 문자열 자르기
    // 짝수인 경우
    else answer = s.substring(middle-1, middle+1);
    return answer;
}
console.log(solution("study")); // u


// other solution - substr
function solution(s){  
    let answer;
    let middle = Math.floor(s.length/2);

    // 홀수
    if(s.length%2 === 1) answer = s.substr(middle, 1); // substr() : 선택한 인덱스(middle)부터 갯수 뽑아내기(1)
    else answer = s.substr(middle-1, 2);
    return answer;
}
