//Imports of to server
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


//template posts
let post = [
    {
        id: "dfjksdf",
        title: "Teste de títiulo",
        descrption: "Teste de descrição"
    }
]



//routers
app.get('/all', (req, res) => {
    res.json(JSON.stringify(post))
})

app.post("/new", bodyParser.json(), (req, res) => {

    let id = generateID();
    let title = req.body.title;
    let description = req.body.title;

    //Gerar id
    function generateID() {
        return Math.random().toString(36).substr(2, 9);
    }

    //Adcionar posts no array
    post.push(id, title, description);

    res.send("Post criado")

})

//Server is running
app.listen(port, () => console.log(`Server is running in the port: ${port}`))