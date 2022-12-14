function isPrimeNum(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(n) {
    let answer = 0;

    for (let j = 2; j <= n; j++) {
        if (isPrimeNum(j)) answer++;
    }
    return answer;
}