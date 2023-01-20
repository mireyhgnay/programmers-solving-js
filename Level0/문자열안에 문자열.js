function solution(str1, str2) {    
    // str1에 str2이 있으면 1, 아니면 2
    return str1.includes(str2) ? 1 : 2;
}