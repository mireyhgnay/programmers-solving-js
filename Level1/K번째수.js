function solution(array, commands) {
    let result = [];
    
    // commands의 길이만큼 반복한다 
    for(let i = 0; i < commands.length; i++){
        let list = array
        .slice(commands[i][0]-1, commands[i][1]) // array slice로 자르기
        .sort((a,b) => a - b); // 오름차순 정렬
        
        // 새로운 배열에 n번째 숫자 추가
        result.push(list[commands[i][2]-1]);
    }

    return result;
}

// best solution
function solution(array, commands) {
    return commands
        // slice로 잘라서 새로운 배열로 반환
        .map(v => array.slice(v[0] - 1, v[1])
        .sort((a, b) => a - b).slice(v[2] - 1, v[2])[0]);
}