function solution(s) {
    if(s.length === 4 || s.length === 6){
        return s.split("").every(n => !isNaN(Number(n)))
    } else {
        return false;
    }
}