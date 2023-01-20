function solution(s1, s2) {
    const answer = s1.filter(x => s2.includes(x));
    return answer.length;
}

/*
    s1에 filter 함수를 통해서 true 값만 걸러내 새로운 배열을 만든다.
    s2에 includes 함수를 통해서 s1 값(x)이 있으면 true, 아니면 false를 반환한다.

    Array.prototype
    - filter() : 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
    - includes() : 배열이 특정 요소를 포함하고 있는지 판별합니다.
*/