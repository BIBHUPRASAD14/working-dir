// age detection for driving a car
// using if, else and else if

const prompt = require("prompt-sync")({ sigint : true })
let age = prompt("What is your age?: ")
age = Number.parseInt(age)

if (age <= 0){
    console.log("Invalid age!!-")
}
else if (age > 1 && age < 18 ){
    console.log("You should not drive a car, you are underage!!")
}
else{
    console.log("You should drive a car!!")
}