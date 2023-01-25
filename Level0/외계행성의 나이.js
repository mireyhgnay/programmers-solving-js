function solution(age) {
    let ageList = { 
        0 : "a",
        1 : "b",
        2 : "c",
        3 : "d",
        4 : "e",
        5 : "f",
        6 : "g",
        7 : "h",
        8 : "i",
        9 : "j"
    }

    return String(age) // 숫자를 문자열로 변환
        .split("") // 배열로 변환
        .map((i) => ageList[i]) // 알파벳으로 새로운 배열 반환
        .join(""); // 문자열로 합치기
}