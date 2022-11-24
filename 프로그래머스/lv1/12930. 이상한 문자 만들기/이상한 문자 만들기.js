function solution(s) {
    const strArr = [];
    const wordArr = s.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
        for (let j = 0; j < wordArr[i].length; j++) {
            if (j % 2 === 0) strArr.push(wordArr[i][j].toUpperCase());
            else strArr.push(wordArr[i][j].toLowerCase());
        }
        if (i !== wordArr.length-1) strArr.push(' ');
    }
    return strArr.join('');
}