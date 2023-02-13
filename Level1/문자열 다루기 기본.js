function solution(s) {
    if(s.length === 4 || s.length === 6){
        return s.split("").every(c => !isNaN(c)) // 모든 요소가 number이면 true
    } else {
        return false;
    }
}

// other solution 
function solution(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}