// creating a function
// functions has parameters

function avg(a,b){
    return (a + b) / 2          // Math.round() can be used to round up the value
    console.log("Done!!")
}

// define variables and use the function created

let x = 5
let y = 2
console.log("avg of x and y is ", avg(x,y))

// function helps to write once execute multiple num of times

                                                                // check prompt-sync module is installed
                                                                // if not use npm install prompt-sync
const prompt = require("prompt-sync")({ sigint : true})         // remember this line of code to use prompt in vs code


let first_num = Number.parseInt(prompt("Enter the first num: "))
let sec_num = Number.parseInt(prompt("Enter the second num: "))
console.log("avg of the numbers entered is ", avg(first_num,sec_num))

// we can use function like this

// another advanced method of creating a function

const sum = (p , q) =>{
    return p + q
}

console.log(sum(7,4)) 

// eg :- 

const hello = () =>{
    console.log("hello!!")
}
console.log(hello())