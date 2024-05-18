const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // // verify user is authenticated
  // const { authorization } = req.headers

  // if (!authorization) {
  //   return res.status(401).json({error: 'Authorization token required'})
  // }

  // const token = authorization.split(' ')[1]

  // try {
  //   const { _id } = jwt.verify(token, process.env.SECRET)

  //   req.user = await User.findOne({ _id }).select('_id')
  //   next()

  // } catch (error) {
  //   console.log(error)
  //   res.status(401).json({error: 'Request is not authorized'})
  // }

  const requiresAuth = req.path.startsWith('/api/book');

  // If the request path doesn't require authentication, skip authentication
  if (!requiresAuth) {
    return next();
  }
 
  // if (req.method === 'POST' && req.path === '/api/book') {
  //   return next();
  // }
 
  // If the request path requires authentication, proceed with authentication logic
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }






}

module.exports = requireAuth