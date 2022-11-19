function solution(price, money, count) {
    let num = 0;
    for (let i = 1; i <= count; i++) {
        num += i * price;
    }
    if (num > money) return num - money;
    else return 0
}