const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send('welcome tpo ecommerce training');
});

app.listen(6000,()=>{
    console.log('app is listening on port 6000');
})