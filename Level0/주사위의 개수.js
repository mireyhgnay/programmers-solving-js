function solution(box, n) {
    return box.map(x => Math.floor(x / n)).reduce((a,b) =>  a * b)
}

// other solution
function solution(box, n) {
    let [width, length, height] = box;
    
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}