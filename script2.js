const text = document.getElementById("text")
const display = document.getElementById("display")
var x = " "

function reversword(){
    x = text.value
    let g = " "
    console.log(x)
    console.log(x.length)
    for (let i = x.length - 1; i >= 0; i--) {
        g += x.charAt(i);
        
    }
    console.log(g)
}