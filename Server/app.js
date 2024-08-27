const express = require("express")
const app = express()
const axios = require("axios")

module.exports = app

app.get("/", (req,res,next) => {
    res.send("Server receieved axios request")
})