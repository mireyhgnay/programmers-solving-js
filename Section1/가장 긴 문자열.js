function solution(s){  
    let answer = "";
    let max = Number.MIN_SAFE_INTEGER; // 안전한 최소 숫자

    // 배열일 때 x 는 각 원소이다.
    for(let x of s){
        if(x.length > max){
            max = x.length;
            answer = x;
        }
    }
    return answer;
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str)); // beautiful