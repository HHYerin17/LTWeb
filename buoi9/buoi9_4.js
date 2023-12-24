function pascalRectangle(num) {
    let mainArr = [];
    let arrA = [];
    for (let i = 0; i < num; i++) {
        if (i == 0) {
            arrA.push(1);
            console.log(arrA);
            mainArr.push(`[${arrA}]`);
        }
        else if (i == 1) {
            arrA.push(1);
            console.log(arrA);
            mainArr.push(`[${arrA}]`);
        } 
        else {
            let arrB = [];
            for (let i = 0 ; i < arrA.length - 1; i++) {
                arrB.push(arrA[i] + arrA[i+1]);
            }
            arrB.push(1);
            arrB.unshift(1);
            console.log(arrB);
            arrA = arrB;
            mainArr.push(`[${arrA}]`);
        }
    }
    return mainArr;
}

console.log(pascalRectangle(8));