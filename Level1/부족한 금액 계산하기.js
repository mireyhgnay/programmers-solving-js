function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i = 0; i <= count; i++) {
        totalPrice += i * price; // 금액 X 횟수 해서 나온 값끼리 더하기
    }
    
    if(totalPrice > money) {
        return totalPrice - money;
    } else {
        return 0;
    }
		//return totalPrice > money ? totalPrice - money : 0;
}


// best solution - 가우스공식?.. 이해하기 어렵긴 함.
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}