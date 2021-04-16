//Imports of to server
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const posts = require("./models/posts")

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

//routers
app.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

app.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.title;

    posts.newPost(title, description)

    res.send("Post criado")

})

//Server is running
app.listen(port, () => console.log(`Server is running in the port: ${port}`))