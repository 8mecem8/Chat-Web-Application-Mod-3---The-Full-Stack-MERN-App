const { Server } = require("socket.io");



 exports.initSocketIo = (server) => 
{
    const io = new Server(server,
        {
            cors: {origin: ["*"]},
            handlePreflightRequest: (req, res) => 
                {
                    const headers = {
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Allow-Origin": req.header('Origin'), //or the specific origin you want to give access to,
                    "Access-Control-Allow-Credentials": true
                }}
        });
    



    io.on('connection', socket => 
    {
        console.log('New Connections Established from Frontend using socket.io',socket.id)
        io.emit('welcome',"welcome to server, Connection has been established")
    })
} 