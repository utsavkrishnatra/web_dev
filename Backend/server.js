const express = require("express");
const  app= express();


const UserModel = require("./userModel");


app.use(express.json());
app.post("/signup", async function (req, res) {
    let data = req.body;
    console.log(data);
    // to create 
    let newUser = await UserModel.create(data);
    console.log(newUser);
    res.end("data recieved");
})



// app.get("/sayHello",function (req,res) {
//     res.end("ye lo get a data");
// })


// app.get("/saybye",function(req,res){
//     res.end("Bye");
// })

// app.get("/square/:num1",function(req,res){

//     let num = req.params.num1;
//     num*=num;
//     res.end(num+" ");

// })

// app.use(express.json());

// app.post("/sayHello",function (req,res,next) {

//     //client ka data request ke body me hota hai
//     console.log("data",req.body);
//     // res.end("Bas badhiya client ji")
//     console.log("Bas badhiya client ji");
//     next();
// })

// app.post("/sayHello",function (req,res) {

//     //client ka data request ke body me hota hai
//     // console.log("data",req.body);
//     // res.end("Bola na badhiya ji")
//     console.log("Bola na badhiya ji");
//     res.end("Response sent");
// })

app.listen(3000, function(){
    console.log("server started at port 3000");
})


console.log("Hello again");


// let obj=
// {
// name: 'Jasbir',
// password: 'abcd',
// confirmPassword: 'abcd',
// email: 'abc@gmail.com',
// phonenumber: '8800953687',
// pic: 'dp.png',
// }