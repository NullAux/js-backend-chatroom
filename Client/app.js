const express = require("express")
const app = express()
const axios = require("axios")

exports.expressApp = app

//Testing axios
/*
axios.get("http://localhost:9090/")
.then((response) => {
    console.log("Axios get ran, got", response)
})
*/

exports.connectUser = (username) => {
    return axios.put("http://localhost:9090/connectUser", {name: username})
}

exports.sendMessage = (message) => {
    return axios.put("http://localhost:9090/sendMessage", {msg: message})
}