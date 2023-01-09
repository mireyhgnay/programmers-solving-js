function solution(array) {
    // 배열 길이 중 중앙값 (중간 index) 찾기
    const center_num = Math.floor(array.length / 2);
    
    // 오름차순으로 정렬하기 - sort() 
    // a - b의 값을 리턴하도록 구현하면 오름차순이 됩니다.
    // a가 크면 양수, b가 크면 음수, 같으면 0이 리턴
    const array_sort = array.sort((a, b) => a - b);
    
    return array_sort[center_num];
}