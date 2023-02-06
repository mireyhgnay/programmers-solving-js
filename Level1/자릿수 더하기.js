function solution(n) {
    let array = String(n).split(''); // string 으로 변환!!
    return array.reduce((a, b) => a + b * 1, 0);
    
    // 현재 reduce메서드의 a값은 문자열이기 때문에 숫자처리를 해주어야한다. 
    // parseInt(cur) Number(cur) cur * 1 과 같은 방법으로 처리해줄 수 있다.
}