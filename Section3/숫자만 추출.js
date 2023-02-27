function solution(str){
    let answer = "";

    for(let x of str){
        // isNaN : 숫자가 아닌 값을 찾는 함수
        // !isNaN : 숫자인 것만! 찾아 추가한다.
        if(!isNaN(x)) answer += x;
    }  

    // parseInt 를 사용할 경우 0208 이 나와도 앞에 0 은 제외하고 208만 출력해준다
    return parseInt(answer); 
}

let str="g0en2T0s8eSoft";
console.log(solution(str));