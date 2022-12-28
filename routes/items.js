const express = require("express")
const router = express.Router()
const controllers = require("../cntrls/items.cntlr")

router.post("/item" , controllers.createitem)
router.get("/allitem" , controllers.getallitem)
router.get("/item/:id" , controllers.getsingleitem)
router.delete("/item/:id" , controllers.deleteitem)
router.put("/item/:id" , controllers.update)




module.exports = router