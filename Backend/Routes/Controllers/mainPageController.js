//Import Node.js Packages
const path = require('path')





const serverMainPage = (req,res,next)=>
{
    console.log("get / req.sessionId: ", req.sessionID);
    res.sendFile(path.join(__dirname, '../../build/index.html'))

} 





module.exports={ serverMainPage }