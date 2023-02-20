function solution(sizes) {
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);

    const width = [];
    const height = [];

    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }

    return Math.max(...width) * Math.max(...height);
}

// best solution - reduce
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
