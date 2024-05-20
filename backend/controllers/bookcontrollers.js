const mongoose = require('mongoose')
const User = require('../models/userModel')
const Books = require('../models/bookModel.js')
const jwt = require('jsonwebtoken');










const getBooks = async (req, res) => {
   
  
    console.log("rohit");
    const books = await Books.find().sort({ createdAt: -1 });
  res.status(200).json(books);
  
  
  
  
  
  
  
  
  
  }

  const getbookbyid = async(req,res)=>{
   
    

    

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
   

    const { user_id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such book'})
    }
  
    
    const books = await Books.findById(id);
    console.log(books);
  
    if (!books) {
      return res.status(404).json({error: 'No such book'})
    }
    
    res.status(200).json(books)
  }
  

  const createbook = async (req, res) => {
  


    console.log(req); 
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  
  const token = authorization.split(' ')[1];

  try {
   
    const { _id } = jwt.verify(token, process.env.SECRET);
    console.log(_id);

   
    const user = await User.findById(_id);
 
    
    if (!user) {
      console.log("roo");
      return res.status(404).json({ error: 'User not found' });
    }
    console.log("asdfafd");

   
    const { title, desc, price } = req.body;
    const img = req.file.path
    console.log(img);
    console.log("asdfafd123");
    
    if (!title || !desc || !price || !img) {
      
      console.log("asdfafd123dfasdf");
      return res.status(400).json({ error: 'Please provide all required fields' });
    }
    console.log("out");
    
    const book = await Books.create({ title, desc, price, img, user_id: _id });
    console.log("ner");
   
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
   

    const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such book' });
  }

  let updatedFields = { ...req.body };

  
  if (req.file) {
    updatedFields.img = req.file.path;
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
  