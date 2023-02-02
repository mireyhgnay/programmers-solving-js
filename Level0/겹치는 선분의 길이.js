function solution(lines) {
    let answer = 0;
    // new Array : 배열 선언 및 할당
    // new Array(200) : 선분들이 놓일 공간(-100 ~ 100)
    // fill(원소) : 0으로 배열의 원소를 채운다
    let lineMap = new Array(200).fill(0);  

    for (let i = 0; i < 3; i++) {
        let left = lines[i][0];
        let right = lines[i][1];

        for (let j = left; j < right; j++) {
            lineMap[j + 100] += 1;
        }
    }
    
    for (let i in lineMap) {
        if (lineMap[i] > 1) {
            answer += 1;
        }
    }

      return answer;
}