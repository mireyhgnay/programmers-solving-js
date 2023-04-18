const solution = (n) => {
  // 약수 : 나눴을 때 0이 되는 수
  let divisorArray = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisorArray.push(i);
    }
  }
  return divisorArray.reduce((a, b) => a + b);
};

// best solution
// 굳이 배열로 만들어서 push 하여 요소들을 더할 필요 없이 바로 약수인 i 들만 더해줘서 sum을 반환하기
function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}
