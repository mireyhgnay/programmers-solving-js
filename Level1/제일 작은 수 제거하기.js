function solution(arr) {
    let answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    arr.length <= 1 ? answer = [-1] : answer = arr;
    
    return answer;
}

// slice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경


// other solution - filter
function solution(arr) {
    const min = Math.min(...arr);
    return arr.length !== 1 ? arr.filter(i => i !== min) : [-1];
}