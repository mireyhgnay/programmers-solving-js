function solution(x) {
    let num = 0;
    const arr = x.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        num += Number(arr[i]); // 배열 원소끼리 더하기
    }
    
    return x % num === 0 ? true : false;
}