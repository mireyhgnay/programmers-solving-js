function solution(seoul) {
    let found = seoul.findIndex(element => element == 'Kim');
    return `김서방은 ${found}에 있다`;
}

// find() : 배열의 특정 요소 찾기
// findIndex() : 배열의 특정 요소의 Index 찾기