const express = require("express")
const app = express()

module.exports = app

//Testing redirects
app.get("/", (req,res,next) => {
    //res.send("Test Received")
    res.redirect("http://localhost:9090/")
})