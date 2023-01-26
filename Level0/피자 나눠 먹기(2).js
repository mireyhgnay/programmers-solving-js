function solution(n) {
  let pizza = 6; // 한 판에 여섯 조각
  
  // 같은 수로 나눠질 때까지 6 더하기
  while(pizza % n !== 0) {
      pizza += 6;
  } 

  return pizza / 6; // 박스 수 반환
}