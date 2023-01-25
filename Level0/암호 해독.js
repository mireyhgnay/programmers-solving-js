function solution(cipher, code) {
    return [...cipher].filter((a,i) => (i+1)%code === 0).join('');
}

/*
[...cipher] : 배열로 변환
filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 "배열로 반환"
join('') : 문자열로 반환
*/