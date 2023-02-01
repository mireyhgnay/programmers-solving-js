function solution(A, B) {
    let arr = [...A];
    
    for(let i = 0; i < arr.length; i++){
        // 만약 두 문자열이 같다면
        if(A === B) {
            return i;
        } 
        
        // 배열 마지막 요소 제거 후 반환 > 그 요소를 맨 앞에 추가하여 반환(배열 한칸씩 미룸)
        arr.unshift(arr.pop()); 
        if(arr.join('') === B) { // 한칸씩 미뤘을 때 A와 B가 같다면
            return i + 1;
        }
    }
    
    // 두 조건 모두 안된다면 -1 반환
    return -1;
}