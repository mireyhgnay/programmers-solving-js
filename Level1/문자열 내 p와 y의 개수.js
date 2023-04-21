const solution = (word) => {
  // split('P') : 배열에서 P 만 골라내기
  // 'pPoooyY' 면, ['', '', 'OOOYY']
  const pString = word.toUpperCase().split("P");
  const yString = word.toUpperCase().split("Y");

  return pString.length === yString.length ? true : false;
};

// other solution : 정규식 활용
function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
