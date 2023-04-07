const express =require("express");
const app =express();
require("./DbConnection/conn.js")
const userDb =require("./DbConnection/Model/user.js")
const port = process.env.PORT || 8080



app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})

app.use(express.json());

//post user data 

app.post("/createUser",(req,res)=>{
    console.log("first api")
    const User =new userDb(req.body)
    console.log(User)
    User.save()      
    res.send("user Details Saved successfull")
    
})
//find all user data
app.get("/user",async(req,res)=>{
    try {
        const requestedData = await userDb.find()
    res.send(requestedData)
    } catch (error) {
        res.send(error)
        
    }
    
})

//find all user data by id
app.get("/user/:id",async(req,res)=>{
    try {
        const id = req.params.id
        const requestedData = await userDb.findById(id)
    res.send(requestedData)
    } catch (error) {
        res.send(error)
        
    }
    
})

app.patch("/user/:id",async(req,res)=>{
    try {
        const _id = req.params.id
        const requestedDataa =  userDb.findByIdAndUpdate(_id,req.body);
        console.log(requestedDataa)
        res.send(requestedDataa)
    } catch (error) {
        res.send(error)
        
    }
    
})

//delete data by id

app.delete("/user/:id",async(req,res)=>{
    try {
        const _id = req.params.id
        const requestedDataa =  userDb.findByIdAndDelete(_id)
        console.log(requestedDataa)
        res.send(requestedDataa)
    } catch (error) {
        res.send(error)
        
    }
    
})