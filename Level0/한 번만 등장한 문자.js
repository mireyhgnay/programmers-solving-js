function solution(s) {
    let answer = [];
    let array = s.split('');
    
    array.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
            answer.push(item);
        }
    })
    
    return answer.sort().join('');
}

/*
indexOf
배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
lastIndexOf
배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환
*/