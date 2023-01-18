// my solution
function solution(num_list) {
    let answer = [];
    let even = []; // 짝수를 담을 배열
    for (let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){ // 짝수일 경우
            even.push(i); // even 배열에 추가
        }
    }
    answer = [even.length, num_list.length - even.length]; 
    
    return answer;
}

// other solution - for...of
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1 // 짝수 홀수 나머지값을 인덱스로 (나머지값 + 1)
    }

    return answer;
}