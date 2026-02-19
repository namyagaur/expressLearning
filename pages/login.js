export default function login(){
    return `<form action = "/submit" method = "post">
        <input type = "text" name = "username" placeholder = "Enter username" />
        <input type = "password" name = "password" placeholder = "Enter password" />
        <button type = "submit">Submit</button>
        </form>
        <h1> Go to home page </h1>
        <a href="/home"> Home </a>`
}