const display = document.getElementById("display")
const array = document.getElementById("array")
const sort = document.getElementById("sort")



sort.addEventListener('click', (e) => {
    let x = array.value
    let length = x.length - 1
    let sortedarray = []
    let fillarray = x.split()
    for (let i = 0; i < array.length; i++) {
        sortedarray[i] = x.split();
        
    }
    console.log(x[0])
    console.log(length)
    console.log(fillarray)
    console.log(sortedarray)
    display.value = array.value
})