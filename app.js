const express = require('express')
const app = express()
const fs = require("fs")
require('dotenv').config()
const mongoose = require("mongoose")
const port = process.env.PORT || 5000

//console.log(process.env)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let data = process.env.toString();
fs.writeFileSync( "./log.txt", data )


//require
// const user = require("./routes/user")
// app.use("/",user)

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });
// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))