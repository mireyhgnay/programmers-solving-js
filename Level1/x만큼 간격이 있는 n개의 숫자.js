function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// best solution
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

/*
Array.prototype.fill()
배열의 첫번째 인덱스부터 마지막 인덱스전까지! 인자에 넣어준 값으로 채워주는 함수입니다.

Array(5) : length만 5 이고, 요소가 비어있는 배열입니다.
Array(5).fill(2) : [2, 2, 2, 2, 2] fill함수를 사용해서 5개의 요소를 value값 2로 채워줍니다.
Array(5).fill(5).map((v, i) => (i + 1) * v); : 
    i 값이 하나씩 증가하면서 더해져서 5개의 새로운 배열로 반환됩니다.
*/
