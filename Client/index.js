const app = require(`${__dirname}/app.js`)
const inquirer = require("inquirer")
const ip = require("ip")

inquirer.prompt([{name: 'username', message: 'Please input username: '}, {name: 'serverIP', message: 'Please input sever address in form IP:Port: '}])
.then((answer) => {
    console.log(`Welcome user ${answer.username}`)
    
    //Set up client
    const server = app.expressApp.listen(0, async () => {
        const clientAddress = ip.address() + ":" + server.address().port
        console.log(`Client is listening on ${clientAddress}`)

        //Attempt to connect
        console.log(`Connecting to server ${answer.serverIP}`)
        app.setServerAddress(answer.serverIP)
        try {await app.connectUser(answer.username, clientAddress)}
        catch {
            //Failed to connect
            console.log(`Unable to connect to server ${answer.serverIP}. Please relaunch and try again`)
            server.close()
        }

        //Loop of the app
        while (true){
            try {await handleInput(clientAddress, app)}
            catch (err) {console.log("An error occured on the last input. Check the server is still online")}
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