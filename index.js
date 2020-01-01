const  express= require("express");
const path=require('path');
const app=express();
const  cookieParser =require('cookie-parser');
const getDate =require('./public/js/getDate');
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.get("/",(req,res)=>{
    res.cookie("last",getDate(),{maxAge:365*24*3600*1000});
    let last=req.cookies.last;
    // res.sendFile(path.join(__dirname,'/index.html'))
    // res.json({adta:'sdad',name:"sad"})

    if(last){
        res.send(`<h2>你上一次的访问时间是：${last}</h2>`)
    }else{
        res.send(`<h2>这是你的第一次访问</h2>`)
    }
})
// app.use('/user',(req,res)=>{
//     if(req.cookies.isLogin){
//         res.send(`<h2>用户中心</h2>`)
//     }else{
//         res.redirect('/login')
//     }
// })
app.listen(3000,function(){
    console.log('listen on 3000');
    
});