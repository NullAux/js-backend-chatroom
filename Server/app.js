const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require("body-parser")
const data = require("./data.js")

//app.use()

module.exports = app

app.put("/connectUser", bodyParser.json(), (req,res,next) => {
    console.log(`User ${req.body.name} connected`)
    const address = (req.ip + ":" + req.body.address.port)
    console.log(address)
    data.connectedUsers.push({username: req.body.name, address: address})
    res.send()
})

app.put("/sendMessage", bodyParser.json(), (req,res,next) => {
    //const sendingUser = data.connectedUsers.find((user) => {return `${user.address.address}${user.address.port}` === `${req.body.address.address}${req.body.address.port}`})//Add catch?
    //^Look for a better way to do equality?
    //console.log(`${sendingUser.username}: ${req.body.msg}`)
    data.connectedUsers.forEach((user) => {
        //Unsure if if should use ${user.address.address} below. Doesn't seem to work with local host (invalid url)
        //REVISIT HERE - How should IPs be used for addressing user on a LAN
        console.log("received message - ", req.body.msg)
        axios.put(`http://${user.address}/receiveMessage`, {msg: `${req.body.msg}`})//${sendingUser.username}: 
    })
    res.send()
})