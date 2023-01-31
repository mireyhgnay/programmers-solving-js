function solution(spell, dic) {
    // 주어진 단어를 알파벳순으로 정렬하기
    let sortSpell = spell.sort().join('');
    let sortDic = dic.map(a => a.split('').sort().join(''));
    
    // dic배열의 요소도 알파벳순으로 정렬하여 동일한 문자가 있다면 1 없다면 2
    return sortDic.find(a => a === sortSpell) ? 1 : 2;
}

// other solution - best!
function solution(spell, dic) {
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}