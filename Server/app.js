const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require("body-parser")
const data = require("./data.js")

//app.use()

module.exports = app

app.put("/connectUser", bodyParser.json(), (req,res,next) => {
    console.log(`User ${req.body.name} connected`)
    data.connectedUsers.push({username: req.body.name, address: req.body.address})
    res.send()
})

app.put("/sendMessage", bodyParser.json(), (req,res,next) => {
    const user = data.connectedUsers.find((user) => {return `${user.address.address}${user.address.port}` === `${req.body.address.address}${req.body.address.port}`})//Add catch?
    //^Look for a better way to do equality?
    console.log(`${user.username}: ${req.body.msg}`)
    data.connectedUsers.forEach((user) => {
        //Unsure if if should use ${user.address.address} below. Doesn't seem to work with local host (invalid url)
        axios.put(`http://localhost:${user.address.port}/receiveMessage`, {msg: `${user.username}: ${req.body.msg}`})
    })
    res.send()
})