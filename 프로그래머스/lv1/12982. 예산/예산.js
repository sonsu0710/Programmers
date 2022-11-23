function solution(d, budget) {
    let answer = 0;
    let accumulate = 0;
    // d 배열 정렬
    d.sort((a, b)=> {
        if (a > b) return 1;
        else if ( a < b) return -1;
        else return 0
    })
    // 정렬된 값을 앞의 값부터 누적하여 예산을 넘지 않는 경우에만 카운트
    for (let i = 0; i < d.length; i++) {
        accumulate += d[i];
        if (accumulate <= budget) answer++;
    }
    return answer;
}