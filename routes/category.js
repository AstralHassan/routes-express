const express = require("express")
const router = express.Router()
const controllers = require("../cntrls/categorycntlr")



router.post("/crtcategory", controllers.createcategory)
router.get("/allcategory", controllers.getallcategory)




module.exports = router