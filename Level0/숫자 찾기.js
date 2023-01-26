const solution = (num, k) => [...num + ''].indexOf(k+'') !== -1 ? [...num+''].indexOf(k+'') + 1 : -1;

// other solution - 풀어서 이해하기 쉬운 풀이
function solution(num, k) {
    let index = num.toString().split('').indexOf(k.toString());

    if (index === -1){
        return index;
    } else {
        return index + 1;
    }
}
