function solution(n, m) {
    let answer = [];
    let big = 0;
    let small = 0;
    if (n - m < 0) {
        big = m;
        small = n;
    } else {
        big = n;
        small = m;
    }

    function createDivisorsArr(x) {
        let divisorsArr = [];
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) {
                divisorsArr.push(i);
            }
        }
        return divisorsArr;
    }

    let bigArr = createDivisorsArr(big);
    let smallArr = createDivisorsArr(small);

    // find G.C.D
    function findGCD(bigArr, smallArr) {
        let gcdArr = [];
        bigArr.forEach((num, idx) => {
            if (smallArr.includes(num) ) {
                gcdArr.push(num);
            }
        })
        return Math.max(...gcdArr);
    }
    let gcd = findGCD(bigArr, smallArr);

    // find L.C.M
    function findLCM(n, m, gcd) {
        let lcm = 1;
        let numArr = [n, m];
        let lcmArr = numArr.map(x => x / gcd);
        lcmArr.push(gcd);
        lcmArr.forEach(num => {
            lcm *= num;
        })
        return lcm;
    }
    let lcm = findLCM(n, m, gcd);

    // result
    answer = [gcd, lcm];
    return answer;
}