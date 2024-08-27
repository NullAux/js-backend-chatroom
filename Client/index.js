const app = require("./app.js")
const inquirer = require("inquirer")

inquirer.prompt([{name: 'username', message: 'Please input username: '}])
.then((answer) => {
    console.log(`Welcome user ${answer.username}`)

    app.expressApp.listen(9091, async () => {
        console.log("Client is listening on port 9091")

        await app.connectUser(answer.username)

        //Loop of the app
        while (true){
            await handleInput()
        }
        })
})

async function handleInput() {        
    const input = await inquirer.prompt([{name: "command", message:"->"}])
    switch (input){
        default:
        //Send message
        return app.sendMessage(input)
        console.log("Returned from send input")
    }
}