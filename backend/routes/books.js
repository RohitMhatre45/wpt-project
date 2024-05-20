const express = require('express')

const  {

    getBooks,
    getBook,
    getbookbyid,
    createbook,
    deletebook,
    updatebook
  
} = require('../controllers/bookcontrollers.js')


const multer = require('multer')


const upload = multer({ dest: 'uploads/' })


const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

router.use(requireAuth)


router.get('/', getBooks)


router.get('/one/:id',getBook)

router.get('/:id',getbookbyid)


router.post('/', upload.single('img') ,createbook)


router.delete('/:id', deletebook)


router.patch('/:id',upload.single('img'), updatebook)


module.exports = router