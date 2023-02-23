function solution(s){  
    let answer;

    // filter : 원본 배열에서 원하는 배열로만 딱 골라서 새로운 배열로 생성한다. 참이되는 애들만~
    answer = s.filter(function(v, i){
        return s.indexOf(v) === i;
    });
    
    return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str)); // ["good", "time", "student"]

// indexOf('good')일 경우 0번인덱스에 있는 good 이 있어서 2번이 아니라 계속 0 으로 출력됨!
// 그래서 indexOf로 나온 인덱스 넘버와 i 숫자와 같은것만 골라내면 중복을 걸러낼 수 있다.