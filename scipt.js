const takeinputone = document.getElementById("first-num");
const takeinputtwo = document.getElementById("second-num");
var display = document.getElementById("display");
// math
function cashflow(){
    let x;
    x = takeinputone.value/takeinputtwo.value;
    display.value = x;
}
function netincome(){
    let x;
    x = takeinputone.value-takeinputtwo.value;
    display.value = x;
}
function totalassets(){
    let x;
    x = takeinputone.value+takeinputtwo.value;
    display.value = x;
}
function netincome(){
    let x;
    x = takeinputone.value*takeinputtwo.value;
    display.value = x;
}
function average(){
    let x;
    x = takeinputone.value+takeinputtwo.value/2;
    display.value = x;
}
function discount(){
    let x;
    x = takeinputtwo.value * 100;

    // x = takeinputone.value-takeinputtwo.value;
    display.value = x * takeinputone.value;
}
function agelimit(){
    // let x;
    // x = takeinputone.value-takeinputtwo.value;
    if (takeinputone<30) {
        display.value = "true";    
    }
    else{
        display.value = "fals"
    }
    
}

function exonential(){
    let x;
    x = takeinputone ** takeinputtwo;
    display.value = x;
}

function remainder(){
    let x;
    x = takeinputone.value % takeinputtwo;
    display.value = x;
}



// the pre-defaind function 


console.log(typeof(100));
console.log(typeof(100.5));
console.log(typeof(NaN));
console.log(typeof("water"));
console.log(typeof(false));
console.log(typeof(9 != 11));
console.log(typeof(Infinity));
console.log("orang"+"e");
console.log("orang"-"s");
console.log("4"+"8");
console.log("4"-"8");
console.log("name"+3);
console.log("name"-3);
console.log(82*"word");
console.log(1+"hello");
console.log("hello"+ 1);
console.log("hello"+ true);
console.log(true + 1);
console.log(1 == '1');
console.log(1 === '1');

// to change the text 
const word = "welcome to orange";
var marray = [];

console.log(word.toUpperCase())
function splitword(){
    marray = word.split(" ");
    return marray;
}
function lastword_firstcharecter(){

    let x = marray[marray.length - 1][0].toUpperCase();
   return x;
}
function change(){
    let x = "welcome to " + lastword_firstcharecter() + "range";
    var y = "welcome to orange " +  "jordan";
    return x, y
}
function welcome(){
    window.alert("welcome")
}
console.log(splitword())
console.log(marray[1].toUpperCase())
console.log(word.toLowerCase())
console.log(word.indexOf("g") + 2)
console.log(change())


