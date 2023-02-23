function solution(s){  
    let answer = "";

    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) === i) answer += s[i];
        // 각 원소의 인덱스 번호와 i가 같은 것만 문자에만 남겨준다.
    }
    return answer;
}

console.log(solution("ksekkset"));