function solution(my_str, n) {
    let answer = [];
    let myStrArray = [...my_str];

    while(myStrArray.length > 0){
        answer.push(myStrArray.splice(0, n).join(''));
    }
    
    return answer;
}