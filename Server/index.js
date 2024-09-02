const app = require("./app.js")
const ip = require("ip")

console.log(ip.address())

const server = app.listen(0, ip.address(), () => {
    console.log(`Server is listening on ${ip.address()}:${server.address().port}`)
})