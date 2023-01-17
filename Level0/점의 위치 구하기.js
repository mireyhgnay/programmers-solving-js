function solution(dot) {
  let answer = 0;
  // dot[0, 1]
  // && : 두가지가 모두 true일 때 반환한다. 
  if (dot[0] > 0 && dot[1] > 0) answer = 1; // + +
  if (dot[0] < 0 && dot[1] > 0) answer = 2; // - +
  if (dot[0] < 0 && dot[1] < 0) answer = 3; // - -
  if (dot[0] > 0 && dot[1] < 0) answer = 4; // + -
  return answer;
}