const solution = (n) => {
  // 문자열로 변환 -> 배열로 변환 -> 내림차순 정렬 -> 문자열로 변환
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
};

// other solution
const solution = (n) => {
  return parseInt((n + "").split("").sort().reverse().join(""));
};
// 문자열을 숫자로 변환 : Number() -> parseInt() 사용
// 숫자를 문자열로 변환 : toString() -> n + '' 사용
// 내림차순 : sort 연산 -> sort().reverse() 배열의 순서를 반전시킨다
