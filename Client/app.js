const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require("body-parser")

let serverAddress
exports.setServerAddress = (address) => {serverAddress = address}

exports.expressApp = app

//Sending ---
exports.connectUser = (username, clientAddress) => {
    return axios.put(`http://${serverAddress}/connectUser`, {name: username, address: clientAddress})
}

exports.sendMessage = (message, address) => {
    return axios.put(`http://${serverAddress}/sendMessage`, {msg: message, address: address})
}

//Receiving ---
app.put("/receiveMessage", bodyParser.json(), (req,res,next) => {
    console.log(req.body.msg)
    res.send()
})