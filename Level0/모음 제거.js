function solution(my_string) {
    let array = my_string.split(''); // 배열로 치환
    let answer = array.filter(str => ['a','e','i','o','u'].includes(str) ? false : true).join('');
    return answer;
}

// 코드 축약
const solution = my_string => [...my_string].filter(str => ['a','e','i','o','u'].includes(str) ? false : true).join('');