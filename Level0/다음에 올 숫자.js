function solution(common) {
    // 등차수열 확인 공식
    const plus = common[1] - common[0] === common[2] - common[1];
    
    if(plus) {
        return common[common.length - 1] + common[1] - common[0];
    } else { // 등비 수열
        return common[common.length - 1] * (common[1] / common[0]);
    }
}