const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require("body-parser")

//app.use()

module.exports = app

app.get("/", (req,res,next) => {
    res.send("Server receieved axios request")
})

app.put("/connectUser", bodyParser.json(), (req,res,next) => {
    console.log(`User ${req.body.name} connected`)
    res.send()
})

app.put("/sendMessage", bodyParser.json(), (req,res,next) => {
    console.log(req.body.msg)
    res.send()
})