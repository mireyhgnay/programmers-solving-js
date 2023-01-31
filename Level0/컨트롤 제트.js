function solution(s) {
    let array = s.split(' ');

    // Z가 있다면, 이전것과 같이 삭제
    while(array.includes('Z')) {
        array.splice(array.indexOf('Z') - 1, 2);
    }

    return array.reduce((a,b) => a + Number(b), 0);
}