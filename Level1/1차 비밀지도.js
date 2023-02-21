function solution(n, arr1, arr2) {
    let answer = [];
   
    for(let i = 0; i < n; i++){
        // toString(2)은 이진수로 반환하는 것
        const bin = (arr1[i] | arr2[i]).toString(2);
        let line = [];
        
        // j가(인덱스값)이 -1일 경우 undefined 반환.
        for(let j = bin.length - n; j < bin.length; j++) { 
            if(bin[j] === '1') { // 1이면 '#', 그 외 ' '
                line.push('#');
            } else {
                line.push(' ');
            }
        }
        
        answer.push(line.join(''));
    }
    
    return answer;
}

// best solution - 정규식, repeat
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}