const db = require("../db");

const getcomments = (req, res) => {

    db.query('SELECT * FROM comments', (err, results) => {
        if (err) throw err;
        res.send(results);
      });

}

const createcomment = (req, res) => {
    const { content } = req.body;
    if (content.length > 10) {
      data.push({
        id: data.length + 1,
        content,
        deletedAt: null
      });
      return res.send({
        success: true,
        msg: "comment is created !",
        data: data[data.length - 1]
      });
    }
    return res.send({
      success: false,
      msg: "content is less than 10 chars",
      data: []
    });

}

const deletecommenta = (req , res) => {

    const commentid = req.params.id

    db.query(`DELETE FROM comments WHERE id = ${commentid}`, (err, result) => {
        if (err) throw err;
        res.send(result);
      });

}






module.exports = {
    getcomments,
    createcomment,
    deletecommenta,
    

}