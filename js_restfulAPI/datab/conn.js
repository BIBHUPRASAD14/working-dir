const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://bibhuprasadb868:bibhu868prasad@bibhu.fdqawbr.mongodb.net/bibhu?retryWrites=true&w=majority",{
    
    // useNewUrlParser :true,
    // useCreateIndex :true,
    // useFindAndModify :true,
    // useUnifiedTopology :true
}).then(()=>{
    console.log("connection is successful.")
}).catch((error)=>{
    console.log("no connection")
})
