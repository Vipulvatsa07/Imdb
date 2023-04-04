const express=require("express")
const {connection}=require("./Config/db")
const {userRouter}=require("./Routes/user.route")
const {WishListRouter}=require("./Routes/watchlist.route")
const {authentication}=require("./Middleware/authentication.middleware")
require("dotenv").config();
const cors = require("cors");
const app=express()
app.use(express.json())
app.use(cors());


app.get("/",(req,res)=>{
  res.send("Home page")
})

app.use("/users",userRouter)
app.use(authentication)
app.use("/wishlist",WishListRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("connected to db")    
    }
    catch(err)
    {
        console.log(err)
        console.log("trouble in connecting to db")
    }
    console.log(`server running at ${process.env.port}`)
})