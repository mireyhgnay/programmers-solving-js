function solution(array) {
    let max = Math.max(...array);
    let maxIndex = array.indexOf(Math.max(...array))
    return [max, maxIndex];
}

// other solution - 내 풀이에서 반복을 줄여줘 간결해짐
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}