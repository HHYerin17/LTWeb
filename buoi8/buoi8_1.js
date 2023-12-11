let max;
let a  = prompt("a= ");
let b = prompt("b= ");
let c = prompt("c= ");
if(a>b && a>c) 
{
    max = a;
}
else if(b>a && b>c)
{
    max = b;
}
else{
    max = c;
}
console.log("so lon nhat la ",max);
