const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentsController")



router.get('/allcomments', commentController.getcomments)
router.post('/createcomments', commentController.createcomment)









module.exports = router