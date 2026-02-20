import express from "express";
import path from "path";

const app = express();
const publicPath = path.resolve("public");
app.use(express.static(publicPath))

app.get("/", (req, resp) => {
    const absPath = path.resolve("view/home.html")
    resp.sendFile(absPath)
});
app.get("/login", (req, resp) => {
    const absPath = path.resolve("view/login.html")
    resp.sendFile(absPath)
});
app.get("/about", (req, resp) => {
    const absPath = path.resolve("view/about.html")
    resp.sendFile(absPath)
});

app.use((req, resp) => {
    //resp status code 404 means not found and we are sending the 404.html file to the client
    resp.status(404).sendFile(path.resolve("view/404.html"))
})
app.listen(3000)