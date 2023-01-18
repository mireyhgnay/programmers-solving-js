function solution(my_string, letter) {
    let answer = my_string.split(letter).join('');
    return answer;
}

/*
문자열 제거하기
- split('') : 문자열의 문자들을 1개씩 분리하여 배열로 만듭니다. => ['a','b','c','d']
- split('c') : limit 값 지정, letter로 들어오는 값을 빼고 배열로 출력 => ['a','b','d']
- join('') : 배열의 요소들을 하나의 문자열로 합칩니다. => abd
*/