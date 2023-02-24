function solution(arr){  
    let answer = 0;
    let cnt = 0;        

    for(let x of arr){ // arr 배열 원소를 하나씩 x에 반복해서 담는다고 생각하면됨
        if(x === 1){ // O 인 경우
            cnt++; // +1 카운팅
            answer += cnt; // answer = answer + cnt 1(O)인 경우 answer 에 계속 더해지는 것
        }
        else cnt = 0; // X 인 경우
    }
       
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));