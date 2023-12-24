function formatArr(arrNum) {
    let zeroArr = [];

    for (let i = 0; i < arrNum.length; i++) 
        if (arrNum[i] === 0) {
            zeroArr.push(arrNum[i]);
            arrNum.splice(i, 1);
            i--;
        }
    return arrNum.concat(zeroArr);
}

console.log(formatArr([0,0,0,21,3,0,0,5]));
console.log(formatArr([0]));