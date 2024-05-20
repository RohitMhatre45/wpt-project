require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const bookRoutes = require('./routes/books')
const multer  = require('multer')
const bodyParser = require('body-parser')


const upload = multer({ 
  dest: 'uploads/', 
  limits: { fileSize: 900 * 1024 * 1024 } 
}) 
 

const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));


 


app.use('/uploads', express.static('uploads'))


app.use('/api/user', userRoutes)
app.use('/api/book',bookRoutes) 
 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {   
    
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    }) 
  }) 
  .catch((error) => {
    console.log(error)
  }) 