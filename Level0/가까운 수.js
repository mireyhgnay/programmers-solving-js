function solution(array, n) {
    return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}

/*
Math.abs
주어진 숫자의 절대값을 반환한다.
양수 또는 0 이라면 그대로 리턴하고 음수라면 그 수의 반대값(양수)를 반환합니다.
*/