let a = prompt("Nhập a: ");
let b = prompt("Nhập b: ");
let c = a*b;
while (a!=b) {
    if (a>b) {
        a-=b;
    }
    else {
        b-=a;
    }
}

console.log(a + "," + c/a);