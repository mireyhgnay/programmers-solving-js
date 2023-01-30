function solution(numbers, k) {
    k = (2 * (k - 1)) % numbers.length;
    return numbers[k];
}

// solution - 축약
function solution(numbers, k) {
    return numbers[(2 * (k - 1)) % numbers.length];
}