//Imports of to server
const express = require('express')
const app = express()
const port = 5000
const path = require("path");
const apiRouter = require("./routers/api")

app.use("/api", apiRouter)
app.use(express.static(path.join(__dirname, "public")))

//Server is running
app.listen(port, () => console.log(`Server is running in the port: ${port}`))