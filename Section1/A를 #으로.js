function solution(s){
    let answer = "";

    for(let x of s){ // 문자 한개씩 탐색할 수 있다
        // 문자열 중에 A인 경우, # 으로 변경
        if(x === 'A') answer += '#';
        else answer += x;
    }
    return answer;
}

let s = "BANANA";
console.log(solution(s));


// other solution - replace()
function solution(s){
    let answer = s;

    answer = answer.replace(/A/g, '#'); // 정규표현식 사용
    return answer;
}