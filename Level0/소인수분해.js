function solution(n) {
    var answer = [];

    for(let i = 2; i <= n; i++) {
        while (n % i === 0) {
            n = n / i;
            answer.push(i);
        }
    }

    return [...new Set(answer)];
}


/*
for문이 정해진 횟수만큼 반복하는 것이라면,
while문은 조건식이 true일 경우에 계속해서 반복한다.

Set()
: 중복된 값이 있으면 한개만 유일하게 남겨줌(중복허용X)
*/