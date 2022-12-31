var express = require('express');
var router = express.Router();






router.get('/', function(req, res, next) {
  try {
    connection.query("SELECT * FROM post", (err, result) => {
      if(err) return res.send({
        success: false,
        msg: "you can't get the post",
        data: []
      })
      return res.send({
        success: true,
        msg: "you have post",
        data: result
      })
    })
  }catch(err){
    return res.send({
      success: false,
      msg: "server error !"
    })
  }
});

module.exports = router;