const userRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const { user,updateAvatar} = require('../Controllers/userController')



// imported Middlewares-------------------------------------------------------------------------
const { authCheck} = require('../Middlewares/EXAMPLE_authMWs')


// Routes-------------------------------------------------------------------------
userRouter.get('/test',user)
userRouter.post('/profile',updateAvatar)




module.exports = userRouter


