function solution(s){         
    let answer = 0;

    for(let x of s){ // s 문자열 탐색
        if(x === x.toUpperCase()) answer++; 
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));