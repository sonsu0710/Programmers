function solution(n) {
    let answer = '';

    if (n % 2 === 1) {
        for (let i = 0; i < Math.floor(n / 2); i++) {
            answer += '수박'
        }
        answer += '수';
    } else {
        for (let i = 0; i < (n/2); i++) {
            answer += '수박'
        }
    }
    return answer;
}