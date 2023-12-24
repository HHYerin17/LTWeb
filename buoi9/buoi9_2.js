function arrayNum(num) {
    let arrayNum = [];
    num += 1;
    while (num > 0) {
        m = num % 10;
        arrayNum.push(m);
        num = Math.floor(num / 10);
    }
    return arrayNum.reverse();
}

console.log(arrayNum(1234));
console.log(arrayNum(123456789));