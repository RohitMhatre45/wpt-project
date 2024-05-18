const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }, 
  price: {
    type: Number,
    required: true
  },
  img:{
    type:String,
    required:true
  },
  user_id: {
    type: Schema.Types.ObjectId, // Reference to the User model's ObjectId
    ref: 'User', // Referring to the 'User' model
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Store', bookSchema)