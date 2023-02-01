// best solution - map 함수 안에서 삼항연산자 사용을 잘 이용해서 이해하기 좋게 코드를 짰다..
function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}