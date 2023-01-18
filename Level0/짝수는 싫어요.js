function solution(n) {
    let answer = [];
    for(let i = 1; i <= n; i++){ // 여기서 어차피 오름차순으로 정렬됨
        if(i % 2 === 1) { // 홀수일 때
            answer.push(i); // 배열에 추가
        }
    }
    return answer;
}