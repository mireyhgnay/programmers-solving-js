function solution(my_string) {
    return my_string.split('').reverse().join('');
}

/*
문자열 역순으로 변경하기
- split('') : 문자열의 문자들을 1개씩 분리하여 배열로 만듭니다. => ['a','b','c','d']
- reverse() : 배열에 있는 요소들의 순서를 역순으로 변경합니다. => ['d','c','b','a'](아직 배열)
- join('') : 배열의 요소들을 하나의 문자열로 합칩니다. => dcba
*/