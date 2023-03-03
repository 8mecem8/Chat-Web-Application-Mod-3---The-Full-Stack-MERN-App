const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const { ObjectId } = mongoose.Schema;


const ConversationSchema = new mongoose.Schema({
  userGroup:
    [{
      type: ObjectId,
      ref:'User',
      required: true, 
      index: true,
    }],
  messages: 
    [{
      text:{type:String,required:true},
      sender:{type: ObjectId,ref:'User',}      
    }],
},{timestamps: true});



userSchema.plugin(uniqueValidator)




const ConversationModel = mongoose.model('Conversation', ConversationSchema)

module.exports = ConversationModel