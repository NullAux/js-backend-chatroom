const app = require("./app.js")
const inquirer = require("inquirer")

inquirer.prompt([{name: 'username', message: 'Please input username: '}, {name: 'serverIP', message: 'Please input sever address in form IP:Port'}])
.then((answer) => {
    console.log(`Welcome user ${answer.username}`)

    //Check given IP is valid and close/reset if not
    console.log(`Connecting to server ${answer.serverIP}`)
    app.setServerAddress(answer.serverIP)
    
    const server = app.expressApp.listen(0, async () => {
        const clientAddress = server.address()
        console.log(`Client is listening on port ${clientAddress.port}`)

        await app.connectUser(answer.username, clientAddress)

        //Loop of the app
        while (true){
            await handleInput(clientAddress, app)
        }
        })
})

async function handleInput(clientAddress) {        
    input = await inquirer.prompt([{name: "command", message:"->"}])
    //Logic to determine action
    switch (input){
        default:
        //Send message
        return app.sendMessage(input.command, clientAddress)
    }
}