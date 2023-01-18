function solution(money) {
    const americano = 5500;
    let glass = Math.floor(money / americano);
    let change = Math.floor(money % americano);
    
    let answer = [glass, change];
    
    return answer;
}

// 위에 내가 풀이한 코드를 축약한 코드
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}