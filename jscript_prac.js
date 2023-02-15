// age detection for driving a car
// using if, else and else if


let age = prompt("What is your age?: ")
age = Number.parseInt(age)

if (age <= 1){
    alert()
}
else if (age > 1 && age < 18 ){
    alert("You should not drive a car, you are underage!!")
}
else{
    alert("You should drive a car!!")
}