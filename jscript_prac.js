// js promise function

let p = new Promise ((resolve, reject) => {
    let a = 2 + 1
    if (a == 3){
        resolve("Yes")
    }else {
        reject("no")
    }
})

p.then((message) => {                           // then func is to execute
    console.log(message,", it is done.")        // print yes if done
}).catch((message) => {                         // catch func is to catch errors
    console.log(message,", it is not done.")    // print no if not done
})