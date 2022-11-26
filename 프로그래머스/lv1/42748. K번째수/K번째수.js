function solution(array, commands) {
    let answer = [];
    let sliceArr = [];
    for (let i = 0; i < commands.length; i++) {
        sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
        sliceArr.sort((a, b) => {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        })
        answer.push(sliceArr[commands[i][2] - 1]);
    }
    return answer;
}