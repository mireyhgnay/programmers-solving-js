function solution(i, j, k) {
    let answer = 0;
    for(i; i <= j; i++){
        answer +=(i+"").split("").filter((v) => v === (k+"")).length;
    }
    return answer;
}

// other solution
const solution = (i, j, k) => [...Array(j-i+1)
    .fill(0)
    .map((a,idx) => (i+idx)+'')
    .join("")].filter(a => a === (k+'')).length;