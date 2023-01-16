function solution(array, n) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === n) { // array[i] - 배열의 원소
        newArr.push(array[i]);
      }
    }
    return newArr.length; // 중복된 원소를 추가한 배열의 원소 갯수를 반환해야할 때 .length
  }