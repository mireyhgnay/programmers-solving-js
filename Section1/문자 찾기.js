function solution(s, t){
    let answer = 0;

    for(let x of s){
        if(x === t) answer++; // 해당 문자의 개수를 출력하는것
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));


// other solution - split
function solution(s, t){
    let answer = s.split(t).length; // t에 해당되는 문자열에서 배열이 나눠짐
    return answer - 1; // 잘리면 배열 원소가 t의 갯수보다 1개더 많으니까 -1 
}