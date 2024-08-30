const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require("body-parser")
const data = require("./data.js")

module.exports = app

app.put("/connectUser", bodyParser.json(), (req,res,next) => {
    console.log(`User ${req.body.name} connected`)
    data.connectedUsers.push({username: req.body.name, address: req.body.address})
    res.send()
})

app.put("/sendMessage", bodyParser.json(), (req,res,next) => {
    console.log(req.body.address)
    const sendingUser = data.connectedUsers.find((user) => {return `${user.address}` === `${req.body.address}`})//Add catch?
    data.connectedUsers.forEach((user) => {
        axios.put(`http://${user.address}/receiveMessage`, {msg: `${sendingUser.username}: ${req.body.msg}`})
    })
    res.send()
})