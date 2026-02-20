import express from 'express';
const app = express();


app.use((req,resp,next)=>{
    console.log("User is accessing the route:"+req.url);
    next();
});

app.get('/',(req,resp)=>{
    resp.send("Home page")
})
app.get('/users',(req,resp)=>{
    resp.send("Users page")
})
app.get('/products',(req,resp)=>{
    resp.send("Products page")
})
app.listen(3200);