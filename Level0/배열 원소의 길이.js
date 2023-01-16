function solution(strlist) {
    let answer = [];
    
    for (let i = 0; i < strlist.length; i++) {
        answer.push(strlist[i].length); // strlist[i] - 배열의 원소
    }
    
    return answer;
}

// solution2 - map
function solution(strlist) {
    return strlist.map((element) => element.length);
}

// solution3 - forEach
function solution(strlist) {
    var answer = [];
    strlist.forEach(element => answer.push(element.length))
    return answer;
}