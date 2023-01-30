function solution(emergency) {
    let sorted = [...emergency].sort((a,b) => b - a); // 오름차순 정렬
    return emergency.map(v => sorted.indexOf(v) + 1);
}