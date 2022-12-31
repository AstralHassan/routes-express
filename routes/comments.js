const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentsController")
const { isAuth } = require("../middlewares")



router.get('/allcomments',isAuth, commentController.getcomments)
router.post('/createcomments',isAuth, commentController.createcomment)
router.delete('/deletecomment' ,isAuth, commentController.deletecommenta)
// router.put('/allcomments/:id',isAuth, commentController.editcomment)








module.exports = router