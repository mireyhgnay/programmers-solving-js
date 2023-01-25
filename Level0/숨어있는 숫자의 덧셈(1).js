function solution(my_string) {
    let answer = 0;
    let regex = /[^0-9]/g; // 숫자가 아닌 문자열을 매칭하는 정규식
    let array = my_string.replace(regex, "").split(''); // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경 & 배열로 쪼개기

    for (let i = 0; i < array.length; i++){
        answer += parseInt(array[i]);
    }

    return answer;
} 