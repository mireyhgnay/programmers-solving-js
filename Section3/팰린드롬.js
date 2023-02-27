function solution(s){
    let answer = "YES";
    // 소문자가 아닌 것들을 찾아서 빈 문자열로 교체한다.
    s = s.toLowerCase().replace(/[^a-z]/g, ''); // 정규식 교체

    if(s.split('').reverse().join('') !== s) return "NO";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));