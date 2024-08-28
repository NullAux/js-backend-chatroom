const express = require("express")
const app = express()
const axios = require("axios")
const bodyParser = require("body-parser")


exports.expressApp = app

//Testing axios
/*
axios.get("http://localhost:9090/")
.then((response) => {
    console.log("Axios get ran, got", response)
})
*/

//Sending ---
exports.connectUser = (username, address) => {
    return axios.put("http://localhost:9090/connectUser", {name: username, address: address})
}

exports.sendMessage = (message, address) => {
    return axios.put("http://localhost:9090/sendMessage", {msg: message, address: address})
}

//Receiving ---
app.put("/receiveMessage", bodyParser.json(), (req,res,next) => {
    console.log(req.body.msg)
})