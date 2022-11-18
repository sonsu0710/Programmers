function solution(phone_number) {
    let spliceNum = phone_number.split('').splice(0, phone_number.length-4);
    let spliceNumLast = phone_number.split('').splice(phone_number.length-4, phone_number.length);
    spliceNum.forEach((item,idx) => {
        spliceNum[idx] = '*'
    })
    return [...spliceNum, ...spliceNumLast].join('');
}