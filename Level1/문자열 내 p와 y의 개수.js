function solution(s) {
    // toUpperCase() : 대문자로 변환
    // split('P') : 배열에서 P 만 골라내기
    const p = s.toUpperCase().split('P');
    const y = s.toUpperCase().split('Y');
    
    return p.length === y.length ? true : false;
}