let str = prompt("Nhập chuỗi: ");
console.log(str);
const a = str.length;
const strChen = prompt("Nhập chuỗi cần chèn: ");
console.log(strChen);
let chen = prompt("Nhập vị trí chèn; ");
if(chen < 0) {
    chen = 0;
} else if(chen > a) {
    chen = a;
}
str1 = str.substring(0, chen);
const str2 = str.substring(chen, a);
console.log(str1);
console.log(str2);
console.log(str1.concat(strChen).concat(str2));