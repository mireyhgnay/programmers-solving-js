function solution(s) {
    // 문자열을 " " 공백 기준으로 배열 나누기
    let arr = s.split(' ');
    const strangerArr = arr.map((str) => {
        let newWord = '';
        for(let i = 0; i < str.length; i++) {
            if(i % 2 === 0) {
                // += 문자열 더하기 
                newWord += str[i].toUpperCase();
            } else {
                newWord += str[i].toLowerCase();
            }
        }
        return newWord;
    })
    
    return strangerArr.join(' ');
}


// best solution - replace, 정규식
function solution(s) {
    return s
      .toUpperCase()
      .replace(/(\w)(\w)/g, (word) => word[0] + word[1].toLowerCase());
}

// 정규표현식을 사용해서 앞에서부터 두 글자씩 잘라서 앞 글자는 대문자로, 뒤 글자는 소문자로 변환한다.
// 만약 글자 수가 홀수면, 마지막 한 글자는 선택되지 않는다.
// 어차피 마지막 글자는 홀수이기 때문에 초기에 단어를 모두 대문자로 변환하면 정규식에 의해 선택되지 않아도 된다.