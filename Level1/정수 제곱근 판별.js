const solution = (n) => {
  // n의 제곱근 구하기
  const sqrt = Math.sqrt(n);
  // 양의 정수일 경우에만 더하기 1, 거듭제곱 값을 출력한다
  return sqrt % 1 == 0 ? Math.pow(sqrt + 1, 2) : -1;
};
