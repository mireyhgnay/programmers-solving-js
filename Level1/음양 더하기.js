function solution(absolutes, signs) {
    let answer = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    
    return answer;
}


// other solution - forEach
function solution(absolutes, signs) {
    let answer = 0;

    absolutes.forEach((v, i) => {
        if (signs[i]) {
            answer += v;
        } else {
            answer -= v;
        }
    })
    
    return answer;
}