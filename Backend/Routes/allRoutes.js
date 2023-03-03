
// İmported Route files-------------------------------------------------------------------------
const mainpageRouter = require("./Route-Links/serverMainPage")
const authRouter = require("./Route-Links/authRouter");
const userRouter = require("./Route-Links/userRouter");


exports.allRoutes = (app)=>
{   
    //Server Serve Main Web Page
    app.use('/',mainpageRouter)
    

    
   

    app.use("/api/auth", authRouter);
    app.use("/api/user", userRouter);
}