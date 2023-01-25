function solution(rsp) {
    return rsp.split('').map((v) => v === "2" ? 0 : (v === "0" ? 5 : 2)).join('');
}

// other solution - 객체 사용
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    let answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}