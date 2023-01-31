function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);
    
    const oneSide = Math.abs(dots[0][1] - dots[1][1]);
    const otherSide = Math.abs(dots[0][0] - dots[2][0]);
    
    return oneSide * otherSide;
}

/*
Math.abs
주어진 숫자의 절대값을 반환합니다.
양수이거나 0이라면 그 수그대로 반환하고, 음수라면 반대값(양수)을 반환합니다.
*/