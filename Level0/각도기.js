function solution(angle) {
    const answer = 0;
    if (angle < 90){
        return 1;   
    } else if (angle === 90){
        return 2;
    } else if (angle < 180){
        return 3;
    } else if (angle === 180) {
        return 4;
    }
    
    return answer;
}


// solution1 - 삼항연산자
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// solution2 - filter
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}