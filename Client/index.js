const app = require("./app.js")
const inquirer = require("inquirer")

inquirer.prompt([{name: 'username', message: 'Please input username: '}])
.then((answer) => {
    console.log(`Welcome user ${answer.username}`)
    
    const server = app.expressApp.listen(0, async () => {
        const address = server.address()
        console.log(server.address())
        console.log(`Client is listening on port ${address.port}`)

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