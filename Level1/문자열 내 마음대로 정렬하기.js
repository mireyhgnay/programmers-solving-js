function solution(strings, n) {
    return strings.sort((a, b) => {
      // 인덱스 n번째 글자를 기준으로 오름차순 정렬
      if (a[n] > b[n]) return 1;
      else if (a[n] < b[n]) return -1;
      // 인덱스 n번째 글자가 같으면 사전순 정렬
      else return a > b ? 1 : -1;
    });
  }
  
  // best solution 
  function solution(strings, n) {
      // strings 배열
      // n 번째 문자열 비교
      return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
  }
  
  // String.prototype.localeCompare() : 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환합니다.
  // s1.localeCompare(s2) : s1이 s2보다 앞에 있으면 -1, 뒤에있으면 1, 같으면 0 반환