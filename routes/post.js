const express = require("express")
const router = express.Router()
const postController = require("../controllers/postController")
const { isAuth } = require("../middlewares")


router.get("/", postController.getALlPosts)
router.post("/", postController.createPost)
router.put("/:id",isAuth, postController.updatePost)
router.get("/:id", postController.getSinglePost)
router.delete("/:id",isAuth, postController.deletePost)
router.get("/:userId", isAuth, postController.getMyPost)
//router.get("/deletePost", isAuth ,postController.getDeletePost)




module.exports = router