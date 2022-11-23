function solution(s) {
    const strArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < strArr.length; i++) {
        while (s.includes(strArr[i])) {
            s = s.replace(strArr[i], String(i));
        }
    }
    return Number(s);
}