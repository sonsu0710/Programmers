function solution(a, b) {
    let answer = 0;
    let lowNum = 0;
    let bigNum = 0;
    if (a >= b) {
        lowNum = b;
        bigNum = a;
    } else {
        lowNum = a;
        bigNum = b;
    }
    let numArr = [];
    for (let i = lowNum; i <= bigNum; i++) {
        numArr.push(i);
    }
    for (let i = 0; i < numArr.length; i++) {
        answer += numArr[i];
    }

    return answer;
}