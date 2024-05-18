const mongoose = require('mongoose')
const User = require('../models/userModel')
const Books = require('../models/bookModel.js')
const jwt = require('jsonwebtoken');










const getBooks = async (req, res) => {
    // const user_id = req.user._id
  
    // const workouts = await Workout.find({user_id}).sort({createdAt: -1})
  
    // res.status(200).json(workouts)
  
    console.log("rohit");
    const books = await Books.find().sort({ createdAt: -1 });
  res.status(200).json(books);
  
  
  
  
  
  
  
  
  
  }

  const getbookbyid = async(req,res)=>{
   
    // let user_id = req.user_id
    // console.log(user_id);
    // const { id } = req.params 

    

    const { id } = req.params;
    console.log("get book roihit");
    console.log(id);
   
    const books = await Books.find({ user_id: id });
    console.log(books);
    if (!books) {
      return res.status(404).json({error: 'No such book'})
    }
    
    res.status(200).json(books)
  }

  const getBook = async (req, res) => {
    console.log("rohittt");
    const { id } = req.params
    // console.log(id);
    // const user_id = id

    const { user_id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such book'})
    }
  
    // const book = await Books.find(user_id)
    const books = await Books.findById(id);
    console.log(books);
  
    if (!books) {
      return res.status(404).json({error: 'No such book'})
    }
    
    res.status(200).json(books)
  }
  

  const createbook = async (req, res) => {
  //   console.log(req);
  //   console.log(req.user);
  // const {title,desc,price,img} = req.body
  
  // console.log(title);
  // console.log(desc);
  // console.log(price);
  // // console.log(img);
  // // console.log(img);
  // // console.log(img);1
  // // console.log(req);
  

  // const user_id = req.user._id;
  // const user = await User.findById(user_id);
  
 
 

 

  
  // let emptyFields = []

  // if(!title) {
  //   console.log('1');
  //   emptyFields.push('title')
  // }
  // if(!desc) {
  //   console.log('2');
  //   emptyFields.push('desc')
  // }
  // if(!price) {
  //   console.log('3');
  //   emptyFields.push('price')
  // }
  // if(!img) {
  //   console.log('3');
  //   emptyFields.push('img')
  // }
  
  // if(emptyFields.length > 0) {
  //   console.log(emptyFields);
  //   return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  // }

  // // add doc to db
  // try {
  //   const email = user.email
  //   console.log(email);
  //   const user_id = req.user._id
  //   const book = await Books.create({title, desc, price,img,user_id})
  //   res.status(200).json(book)
  // } catch (error) {
  //   res.status(400).json({error: error.message})
  // }

    console.log(req); 
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  // Extract the JWT token from the authorization header
  const token = authorization.split(' ')[1];

  try {
    // Verify the JWT token and decode it to get the user ID
    const { _id } = jwt.verify(token, process.env.SECRET);
    console.log(_id);

    // Find the user based on the decoded user ID
    const user = await User.findById(_id);
 
    // Check if the user exists
    if (!user) {
      console.log("roo");
      return res.status(404).json({ error: 'User not found' });
    }
    console.log("asdfafd");

    // Extract book details from the request body
    const { title, desc, price } = req.body;
    const img = req.file.path
    console.log(img);
    console.log("asdfafd123");
    // Validate book details
    if (!title || !desc || !price || !img) {
      
      console.log("asdfafd123dfasdf");
      return res.status(400).json({ error: 'Please provide all required fields' });
    }
    console.log("out");
    // Create the book
    const book = await Books.create({ title, desc, price, img, user_id: _id });
    console.log("ner");
    // Return the created book
    res.status(201).json(book);
    console.log("nerr");
  } catch (error) {
    console.log("nerrrrr");
    console.error('Error creating book:', error);
    console.log("nerrrrrrrr");
    res.status(500).json({ error: 'Internal server error' });

  }





















}


const deletebook = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such book'})
    }
  
    const book = await Books.findOneAndDelete({_id: id})
  
    if (!book) {
      return res.status(400).json({error: 'No such book'})
    }
  
    res.status(200).json(book)
  }

  
  const updatebook = async (req, res) => {
    // const { id } = req.params
  
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({error: 'No such book'})
    // }
  
    // const book = await Books.findOneAndUpdate({_id: id}, {
    //   ...req.body
    // })
  
    // if (!book) {
    //   return res.status(400).json({error: 'No such book'})
    // }
  
    // res.status(200).json(book)

    const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such book' });
  }

  let updatedFields = { ...req.body };

  // Check if there is a file upload
  if (req.file) {
    updatedFields.img = req.file.path; // Assuming the file path is saved in req.file.path
    console.log(updatedFields.img);
  }

  try {
    const book = await Books.findOneAndUpdate({ _id: id }, updatedFields, { new: true });

    if (!book) {
      return res.status(400).json({ error: 'No such book' });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }


















  }
  
  module.exports = {
    getBooks,
    getBook,
    getbookbyid,
    createbook,
    deletebook,
    updatebook
  }
  