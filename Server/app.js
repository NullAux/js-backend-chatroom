const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require("body-parser")
const data = require("./data.js")

//app.use()

module.exports = app

app.get("/", (req,res,next) => {
    res.send("Server receieved axios request")
})

app.put("/connectUser", bodyParser.json(), (req,res,next) => {
    console.log(`User ${req.body.name} connected`)
    data.connectedUsers.push({username: req.body.name, address: req.body.port})
    res.send()
})

app.put("/sendMessage", bodyParser.json(), (req,res,next) => {
    const user = data.connectedUsers.find((user) => {return user.address === req.body.address})//Add catch?
    console.log(`${user.username}: ${req.body.msg}`)
    data.connectedUsers.forEach((user) => {
        axios.put(`http://localhost:${user.address}/receiveMessage`, {msg: `${user.username}: ${req.body.msg}`})
    })
    res.send()
})