const {WatchListModel}=require("../Model/watchlist.model")

const express=require("express")
const jwt=require("jsonwebtoken")


const WishListRouter=express.Router()

WishListRouter.post("/",async(req,res)=>{
   const payload=req.body
    try{

        const user=new WatchListModel(payload)
        await user.save()
        res.send({"msg":"post saved"})

    }
    catch{
res.send({"msg":"not able to create post"})
    }
})
WishListRouter.get("/",async(req,res)=>{
    
  
    try
    {
        const movies=await WatchListModel.find({userID:req.body.userID})
        res.send(movies)

    }
    catch(err)
    {
        res.send({"msg":"data not found"})
    }
}



)


WishListRouter.patch("/:id",async(req,res)=>{
    let id=req.params.id
    const payload =req.body
    console.log(id)

    try
    {
await WatchListModel.findByIdAndUpdate({_id:id},payload)
res.send({"msg":"updated"})
    }
    catch
    {
       res.send({"msg":"not updated"})
    }
})



WishListRouter.delete("/:id",async(req,res)=>{
    let id=req.params.id
    // const payload =req.body
    console.log(id)

    try
    {
await WatchListModel.findByIdAndDelete({_id:id})
res.send({"msg":"deleted"})
    }
    
    catch
    {
       res.send({"msg":"not deleted"})
    }
})



module.exports={
    WishListRouter
}