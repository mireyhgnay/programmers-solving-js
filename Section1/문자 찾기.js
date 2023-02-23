function solution(s, t){
    let answer = 0;

    for(let x of s){
        if(x === t) answer++; // 해당 문자의 개수를 출력하는것
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));