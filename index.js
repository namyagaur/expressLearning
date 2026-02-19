import express from "express"
import home from "./pages/home.js"
import login from "./pages/login.js"
import submit from "./pages/submit.js"
const app = express()

app.get("/", (req, resp) => {
    resp.send(home())
})
app.get("/login", (req, resp) => {
    resp.send(login())
})

//since there is method post in form tag we have to use app.post here instead of app.get
app.post("/submit", (req, resp) => {
    resp.send(submit)

})

app.listen(3200)













// const express = require('express');
// const app = express();
// app.get("",(req,resp)=>{
//     resp.send("<h1> Basic node js example </h1>");
// })
// app.get("/about",(req,resp)=>{
//     resp.send("<h1> ABOUT </h1>");
// })
// app.get("/contact",(req,resp)=>{
//     resp.send("<h1> ABOUT </h1>");
// })

// app.listen(5600);