function solution(array, height) {
    let answer = []; // 반환해야 할 빈 배열을 만들어주기
    for (i = 0; i < array.length; i++){ 
        if(array[i] > height){ // 반복문을 통해 만들어진 배열 애들 중 height 보다 큰 요소 골라내기 
            answer.push(i); // 반환해야하는 빈 배열에 머쓱이보다 큰 요소들을 추가
        }
    }
    return answer.length; // 머쓱이보다 큰 사람의 길이(갯수)를 반환
}