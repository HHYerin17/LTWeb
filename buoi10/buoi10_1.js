const ageArrOfCat = [1, 5, 3, 2, 4 , 7];
const ageArrOfHuman = [];

ageArrOfCat.forEach(function(a) {
    if (a <= 2) ageArrOfHuman.push(a * 2);
    else ageArrOfHuman.push(a * 4 + 16);
});
console.log(ageArrOfHuman);

const adultArr = ageArrOfHuman.filter(function(a) {
    return a >= 18;
});
console.log(adultArr);

let sum = 0;
let cnt = 0;
const sumAge = adultArr.forEach(function(a) {
    sum += a;
    cnt++;
});
console.log("Average of adult's age: " + (sum / cnt));