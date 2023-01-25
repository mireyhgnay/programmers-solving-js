function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop()); // 마지막 요소 제거 후 반환(pop) -> 새로운 요소를 배열의 맨 앞쪽에 추가 (unshift)
    } else {
        numbers.push(numbers.shift()); // shift : 첫번째 요소 제거, 제거된 요소 반환 -> push 로 추가
    }

    return numbers;
}

/*
    - unshift : 배열에서 맨 끝 요소를 제거
    - pop : 배열에서 마지막 요소를 제거하고 그 요소를 반환
    - shift : 첫번째 요소 제거, 제거된 요소 반환
*/