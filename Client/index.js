const app = require("./app.js")
const inquirer = require("inquirer")

inquirer.prompt([{name: 'username', message: 'Please input username: '}, {name: 'port', message: 'Please input server port: '}])
.then((answer) => {
    console.log(`Welcome user ${answer.username}`)
    
    //Add check port is valid
    const address = answer.port

    app.expressApp.listen(address, async () => {
        console.log(`Client is listening on port ${address}`)

        await app.connectUser(answer.username, address)

        //Loop of the app
        while (true){
            await handleInput(address)
        }
        })
})

async function handleInput(address) {        
    const input = await inquirer.prompt([{name: "command", message:"->"}])
    //Logic to determine action
    switch (input){
        default:
        //Send message
        return app.sendMessage(input.command, address)
    }
}