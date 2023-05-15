function solution(x) {
  let num = 0;
  const arr = x.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    num += Number(arr[i]); // 배열 원소끼리 더하기
  }

  return x % num === 0 ? true : false;
  // x 가 10이면, 10 % 1 나머지가 0이니까 true
}

// other solution
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
