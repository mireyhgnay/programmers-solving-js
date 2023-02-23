function solution(a, b, c){
    let answer="YES";
    let max;
    let sum = a + b + c;

    if(a > b) max = a;
    else max = b;
    if(c > max) max = c;
    // a,b,c 다 비교해서 가장 큰 값이 max에 들어갔다

    if(sum - max <= max) answer = "NO";  // (sum - max <= max)은 짧은 막대의 길이 합이 최대 길이보다 작거나 같다
    return answer;
}

console.log(solution(13, 33, 17));