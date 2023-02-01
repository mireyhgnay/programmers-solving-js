function solution(numlist, n) {
    return numlist.sort((a,b) => {
        // Math.abs : 절댓값 반환
        const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)]
        // 거리가 같다면 더 큰 수를 우선 배치
        if(aGab === bGab) return b - a;
        // 다르다면 거리별 오름차순 정렬
        return aGab - bGab;
    })
}

// best solution
function solution(numlist, n) {
    //절대값이 같을 때 b-a는 큰 값이 앞으로 옴.
    numlist.sort((a,b) => Math.abs(a-n) - Math.abs(b-n) || b - a)
    return numlist;
}