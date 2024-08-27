const express = require("express")
const cors = require("cors")
const { connectDb } = require("./db/dbConfig");
require('dotenv').config({})


const app = express()

app.get('/', (req,res)=>{
   res.send("hello world")
})
app.listen(process.env.PORT, async() => {
    await connectDb();
    console.log("Users api listing on PORT : ",process.env.PORT);
})

app.use(express.json())
app.use(cors());




const userRouters = require("./routes/UserRoute");
app.use("/users", userRouters);


module.exports = app;
