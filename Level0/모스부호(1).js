function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    // 모스 부호는 공백으로 나뉘어져있음
    return letter.split(' ').map(i => morse[i]).join('');
}

// other solution - reduce (map + join을 한번에 해결)
function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}