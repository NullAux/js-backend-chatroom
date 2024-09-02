# js-backend-chatroom
Portfolio/Practise work. Implementing simple chatroom over LAN.

Technologies used:
-Express (for server/client hosting)
--body-parser, for using body for data
-Nodemon (Dev) (for quickly updating express servers)
-Insomnia (external) (for testing operations before UI is implemented)
-Axios (Dev) (for sending requests between client/server)
-Inquirer (for taking user input)
-IP, for getting IPs to make LAN connections

Project finish:
-Able to connect multiple clients and send messages.
-I've not exported to executables as this seems unrelated to the core goal of the project (ie testing using express/axios for different uses)
-This also means I've not been able to test that IPs work over LAN.
-Current console-only is messy (messages coming in interrupting inquirer inputs), but this is more a frontend problem and again out of scope.

In short, I'm happy with this as a proof of concept. I'm closing it here to avoid scope-creep but may revisit in the future.