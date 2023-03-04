const conversationModel = require("../../Databases/MongoDb/Models/ConversationModel")
const userModel = require("../../Databases/MongoDb/Models/userModel")










exports.GetAllUserConversations = async (req, res)=>
{   console.log(req.params.userID)
    try 
    {
        const conversations = await conversationModel.find({members: { $in: [req.params.userID] } })
       
        return res.status(200).json(conversations)
    
    } 
    catch (err)
    {
        res.status(400).json(`There has been an error ${err}`)
    }
}






exports.createUpdateConversation = async (req, res)=>
{
    console.log("body is ======>",req.body)

    const _id = req.body.conversation ? req.body.conversation._id : undefined

    try 
    {       
            
            
            if(_id)
            {
                const updatedConversation = await conversationModel.findOneAndUpdate(
                    req.body.conversation._id,
                    {
                        $push: { messages: {...req.body.message} }
                    },
                    {returnNewDocument:true,}
                )
                return res.status(200).json(updatedConversation)
            }
            //else
            const newConverstaion = await new conversationModel(
                {
                    members:[...req.body.users],
                    messages:[req.body.message]
                }).save()

            return res.status(200).json(newConverstaion)
    } 
    catch (err) 
    {
        res.status(400).json(`There has been an error ${err}`)
    }
}