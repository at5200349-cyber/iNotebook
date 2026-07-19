const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    obj={
        number:34
    }
    res.json([])
})
module.exports=router