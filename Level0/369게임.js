function solution(order) {
    return Array.from(order.toString()).filter(t => ['3', '6', '9'].includes(t)).length;
}

// other solution
function solution(order) {
    return (''+order).split(/[369]/).length-1;
		// oder 를 문자열로 바꿔주고, 배열로 변경해서, 정규식으로 369 찾아서, 길이 반환
}