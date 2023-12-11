let a = prompt("a= ");
let b = prompt("b= ");
let c = prompt("c= ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if(a<=0 || b<=0 || c<=0)
{
    console.log(false);
}
else if((a+b)>c && (a+c)>b && (b+c)>a)
{
    console.log(true);
}
else 
{
    console.log(false);
}

