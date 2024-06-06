const display = document.getElementById("display");
const radius = document.getElementById("radius");
 
function calculateare(){
    let x = Number(radius.value);
    console.log(typeof(x));
    let PI = Math.PI * x ** 2;
    console.log(PI);
    display.value = "the area of circle is : " + PI
}