function solution(score) {
    // score의 평균 점수를 구한다
  	let avg = score.map(a => (a[0] + a[1]) / 2);
  	
  	// avg(평균값)를 복사한 배열을 내림차순으로 정렬한 배열 sort를 선언한다.
    let sorted = avg.slice().sort((a, b) => b - a);
  	
  	// avg의 요소와 동일한 sorted 배열의 index 값에 1을 더한다.
    return avg.map(v => sorted.indexOf(v) + 1);
}