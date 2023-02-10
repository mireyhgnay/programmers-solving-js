function solution(phone_number) {
    // 번호 뒷 4자리 가져오기
    let back = phone_number.substr(-4, 4); // 끝에서 4번째부터 4개 가져오기

    // 번호 뒷 4자리를 제외한 앞부분을 가져오기
    let front = phone_number.substring(0, phone_number.length - 4);

    // 뒷 4자리를 제외한 앞부분을 * 문자로 변환해주기
    let result = front.replace(/[0-9]/g, '*');
    
    // * 문자로 변환해 준 부분과 뒷자리를 더해서 값을 구하기
    return result + back;
}

// substr() : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환
// substring() : string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환


// best solution - 정규식
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}