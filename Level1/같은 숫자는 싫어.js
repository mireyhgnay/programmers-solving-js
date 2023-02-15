function solution(arr) {
    return arr.filter((v, i) => v != arr[i + 1]);
    // 현재 요소(v) 와 그 다음 요소([i + 1]) 가 같지 않은 애들만 반환한다.
}


// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.


// other solution - for문
function solution(arr) {
    var answer = [arr[0]];

    for (let i=1; i<arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}