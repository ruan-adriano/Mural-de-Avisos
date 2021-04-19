const express = require('express') //módulo express
const app = express() //objeto
const router = express.Router(); //rotas
const posts = require("../models/posts"); //posts
const cors = require("cors");
const bodyParser = require("body-parser"); //body-parser

app.use(express.urlencoded({ extended: true }))


const options = {
    origin: "http://localhost:5000"
}

//routers
router.use(cors());
router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.title;

    posts.newPost(title, description)

    res.send("Post criado")

})

module.exports = router;
