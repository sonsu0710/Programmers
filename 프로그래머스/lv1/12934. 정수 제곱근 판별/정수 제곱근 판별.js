function solution(n) {
    let answer = 0;
    const sqrt = Math.sqrt(n);
    if (sqrt === Math.floor(sqrt)) answer = (sqrt+1)**2
    else answer = -1;
    return answer;
}