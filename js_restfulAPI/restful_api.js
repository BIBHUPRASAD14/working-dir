// try{

const express = require('express')
require("./datab/conn")
const app = express()
const port = process.env.PORT || 3000


app.get("/icecream",(req,res)=>{
    res.send([
         
    {id:1, flavour : "chocolate", instock : 2 },
    {id:2, flavour : "strawberry", instock : 7 },
    {id:3, flavour : "mango", instock : 5 },
    {id:3, flavour : "vanilla", instock : 10 }
        
    ])
})

// try{
// icecream = new Promise((resolve,reject)=>{
//     console.log(icecream)
    
// })
// }catch(error){
//     console.log("Database not loaded")
// }


// app.get("/icecream",(req,res)=>{
//     res.json(icecream)
// })

// app.get("/icecream/id:",(req,res)=>{

// })



app.listen(port, ()=>{
    console.log(`hosted on the port ${port}`)
})

// }
// catch(error){
//     console.log("oops! we got a error")
// }
