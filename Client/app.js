const express = require("express")
const app = express()
const axios = require("axios")

module.exports = app

//Testing axios
axios.get("http://localhost:9090/")
.then((response) => {
    console.log("Axios get ran, got", response)
})