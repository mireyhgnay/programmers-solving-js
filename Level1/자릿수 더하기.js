const solution = (num) => {
  const numToString = num.toString(); // 숫자를 문자열로 변환
  const numArray = [...numToString]; // 배열로 변환
  return numArray.reduce((a, b) => a + Number(b), 0); // 문자열을 숫자로 다시 변환하여 더하기
};

// other solution
function solution(n) {
  let array = String(n).split(""); // string 으로 변환!!
  return array.reduce((a, b) => a + b * 1, 0);
  // 현재 reduce메서드의 a값은 문자열이기 때문에 숫자처리를 해주어야한다.
  // parseInt(cur) Number(cur) cur * 1 과 같은 방법으로 처리해줄 수 있다.
}

// best solution
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
