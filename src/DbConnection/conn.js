const mongoose =require('mongoose')
const DB ="mongodb+srv://admin:admin@nextproject.4xxcxdp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{console.log("Connection is successfull with mongoDb")
}).catch((err)=>{
    console.log(err)
})
