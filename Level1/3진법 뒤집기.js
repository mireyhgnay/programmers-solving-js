// best solution
function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// 1. Number.toString([N진수]) : 숫자를 입력한 진수로 변환한 string을 반환한다. 진수를 생략하면 10진수로 변환한다.
// 2. 전개 구문을 사용해서 배열로 뒤집고(reverse, 다시 문자열로 합친다.(join)
// 3. Number.parseInt(string, [N진수]) : string을 N진수에서 1정수(10진수)로 계산한 값을 반환한다.