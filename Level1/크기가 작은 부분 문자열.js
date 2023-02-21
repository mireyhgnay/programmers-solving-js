function solution(t, p) {
    let answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        let num = t.substr(i, p.length);
        
        // 그렇게 만들어진 숫자들을 Number로 변환
        // p 숫자보다 작거나 같은 숫자를 추가
        if (Number(num) <= Number(p)) answer ++;
    }
    
    return answer;
}

// substr : 문자열에서 특정 위치에서 시작해서 특정 문자 수 만큼의 문자들을 반환한다.