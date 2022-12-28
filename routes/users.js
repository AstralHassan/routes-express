const express = require("express")
const router = express.Router()
const controllers = require("../cntrls/createuser")

router.post("/", controllers.createUser)
router.post("/login", controllers.getuser)
router.get("/me", controllers.getUserId)




module.exports = router