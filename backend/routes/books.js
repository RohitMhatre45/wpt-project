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

// GET all workouts
router.get('/', getBooks)

//GET a single workout
router.get('/one/:id',getBook)

router.get('/:id',getbookbyid)

// POST a new workout
router.post('/', upload.single('img') ,createbook)

// DELETE a workout
router.delete('/:id', deletebook)

// UPDATE a workout
router.patch('/:id',upload.single('img'), updatebook)


module.exports = router