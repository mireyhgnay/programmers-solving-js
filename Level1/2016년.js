function solution(a, b) {
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let date = new Date(`2016-${a}-${b}`);
    let day = date.getDay(); // 요일 반환
    return week[day];
}

// Date.prototype.getDay() : 주어진 날짜의 현지 시간 기준 요일을 반환한다.
// 0은 일요일 /1 월요일/2 화요일/3 수요일/4 목요일/5 금요일/6 토요일