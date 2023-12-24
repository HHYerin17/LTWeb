function sumInt(arrNum, target) {
    let arr = []
    for (let i = 0; i < arrNum.length - 1; i++) 
        for (let j = i + 1; j < arrNum.length; j++) 
            if (arrNum[i] + arrNum[j] == target) {
                arr.push(`[${i}, ${j}]`);
                break;
            }
    
    return arr;
}

console.log(sumInt([2, 7, 11, 15], 9));
console.log(sumInt([3, 2, 4], 6));
console.log(sumInt([4, 2, 5, 8, 1, 2], 6));