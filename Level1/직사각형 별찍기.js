process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i = 0; i < b; i++){ // 몇줄 반복?
        let str = "";
        for(let j = 0; j < a; j++){ // 줄마다 몇개 찍을 건지?
            str += "*"
        }
        console.log(str);
    }
    
});


// best solution - repeat
const row = '*'.repeat(a)
for(let i = 0; i < b; i++){
    console.log(row)
}