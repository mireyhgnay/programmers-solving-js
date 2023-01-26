function solution(my_string, num1, num2) {
    const array = [...my_string];
    
    // 배열 인덱스(num1)부터, 1개를 제거하고, my_string[num2]를 추가한다.
    // num1 인덱스 번호가 num2로 추가됨
    array.splice(num1, 1, my_string[num2])
    array.splice(num2, 1, my_string[num1])
    return array.join('');
}

// other solution - 구조분해
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}