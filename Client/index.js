const app = require("./app.js")
const inquirer = require("inquirer")

inquirer.prompt([{name: 'username', message: 'Please input username: '}])
.then((answer) => {
    console.log(`Welcome user ${answer.username}`)

    app.listen(9091, () => {
        console.log("Client is listening on port 9091")
    })
})


