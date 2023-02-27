function solution(s){
    let answer = "YES";
    s = s.toLowerCase();
    let length = s.length;

    for(let i = 0; i < Math.floor(length/2); i++){
        // i가 하나씩 증가하니까 비교대상은 i - 1 해줘서 첫과 끝부터 차례대로 비교하도록
        if(s[i] != s[length - i - 1]) return "NO";
    }
    // if(s.split('').reverse().join('') !== s) return "NO";
    return answer;
}

// other solution - 최고 간단 
function solution(s){
    let answer = "YES";
    s = s.toLowerCase();

    // 글자를 뒤집어서 비교하면 끝~
    if(s.split('').reverse().join('') !== s) return "NO";
    return answer;
}


let str="goooG";
console.log(solution(str));