const prompt = require("prompt-sync")({ sigint : true })
age = Number.parseInt(prompt("what's your age?: "))
if (age < 18){
    console.log("you cannot drive")
}
else{
    switch (age){
        case 18:
            console.log("your age is undecidable!!")
            break
        default:
            console.log("You can drive!!")
    }   
}