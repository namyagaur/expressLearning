import express from 'express';
const app = express();

///login?age=29
// function ageCheck(req,resp,next){
//     if(!req.query.age || req.query.age < 18){
//         resp.send("You are not allowed to access this page");
//     }else{
//         next();
//     }
// }

// app.use(ageCheck);
function ipCheck(req,resp,next){
    const ip = req.socket.remoteAddress;
    console.log(ip);
    if(ip === "192.168.1.1"){
        resp.send("You are not allowed to access this page");
    }else{
        next();
    }
}
app.use(ipCheck);

app.get("/",(req,resp)=>{
    resp.send("Home page");
})
app.get('/login',(req,resp)=>{
    resp.send("Login page");
})
app.get('/admin',(req,resp)=>{
    resp.send("Admin page");
})

app.listen(3400);