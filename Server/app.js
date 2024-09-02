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
    //Find name of user message came from
    const sendingUser = data.connectedUsers.find((user) => {return `${user.address}` === `${req.body.address}`})
    if(sendingUser === undefined) {
        console.log("Unable to identify user. No message sent.")
        res.status(404).send()
    }

    //Try to send to each user
    data.connectedUsers.forEach(async (user, index) => {
        try {await axios.put(`http://${user.address}/receiveMessage`, {msg: `${sendingUser.username}: ${req.body.msg}`})}
        catch{
            console.log(`Unable to send message to user ${user.username}, removing from connected users.`)
            data.connectedUsers.splice(index,1)
            //^Check this doesn't mess up forEach loop.
        }
    })
    try {res.send()}
    catch {console.log("Threw error on res.send")}
})

//Can add disconnect option for users

app.use((err, req, rest) => {
    console.log("Error handler called")
})