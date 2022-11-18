function solution(s1, s2) {
    let answer = 0;
    if (s1.length >= s2.length) {
        s1.forEach((item, idx) => {
            if (s2.includes(item)) {
                answer++;
            }
        })
    } else {
        s2.forEach((item, idx) => {
            if (s1.includes(item)) {
                answer++;
            }
        })
    }
    return answer;
}