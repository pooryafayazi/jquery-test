
var a = 14;

console.log(a);
console.log("name");

a = a - 4; 

if (a == 10) {
    console.log("name is equal 10");
    console.log("name is equal 10");
}

else {
    console.log("name is not equal 10");
    console.log("name is not equal 10");

}

// for (i=0 ; i<10 ; i=i+2 or i+=2)
// for (i=10 ; i>0 ; i--)
for (i = 0; i < 10; i++) {
    console.log(a);
    a = a - 1;
}
console.log("After loop : i = " + i);
console.log("After loop : a = " + a);




function changetext() {
    document.getElementById("footer").innerHTML = "Hello from JavaScript!";
}

var b = [1, 2, 3, 4, 5];

console.log(" b is " + b[2]);

var aa = 5, bb = 3;
bb = aa;
if (bb == 5)
    console.log("done good");
else
    console.log("done bad");
console.log("done very badly");


var c = [13, 14, 15, 16, 17];

for (i = 0; i < c.length; i++) {
    console.log("c[" + i + "]" + " : " + c[i]);

}
console.log(c)


var visible_about = 0;

function visi() {

    if (visible_about == 0) {
        document.getElementById("contact").style.visibility = "hidden";
        visible_about = 1;
    }
    
    else{
        document.getElementById("contact").style.visibility = "visible";
        visible_about = 0;
    }
    console.log(visible_about);
}