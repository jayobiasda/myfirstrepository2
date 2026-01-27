document.getElementById("num").innerHTML = 12345;
document.getElementById("deci").innerHTML = 12.345;

document.getElementById("doubleq").innerHTML = "hello, world";
document.getElementById("singleq").innerHTML = 'helo, javascript';

let greeting = "welcome to javascript syntax!";
const pi = 3.14159
var isActive = true;


document.getElementById("vlet").innerHTML =greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isActive;

let aa= 10;
const bb =20;
var cc = 30;

document.getElementById("a").innerHTML = aa;
document.getElementById("b").innerHTML = bb;
document.getElementById("c").innerHTML = cc;

function changevalue(){
    aa=100
   //  bb=200; // this will cause an error
    cc=300

    document.getElementById("a").innerHTML = aa;
    document.getElementById("b").innerHTML = bb;
    document.getElementById("c").innerHTML = cc;
}