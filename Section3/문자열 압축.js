function solution(s){
    let answer = "";
    let cnt = 1; // 갯수 초기값
    s = s + " "; // 띄어쓰기 추가

    // 위 띄어쑤기 추가해준것 때문에 s.length - 1 을 해준 것
    for(let i = 0; i < s.length - 1; i++){
        // 다음 배열 인덱스랑 같다면 cnt 1 증가
        if(s[i] === s[i+1]) cnt++; 
        else{
            answer += s[i]; // 그냥 해당 문자로
            if(cnt > 1) answer += String(cnt);
            cnt = 1; // cnt 갯수 추가해주고 다시 cnt는 1로 초기화
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));