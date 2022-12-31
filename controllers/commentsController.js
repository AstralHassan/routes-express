const db = require("../db");

const getcomments = (req, res) => {

    db.query('SELECT * FROM comments', (err, results) => {
        if (err) throw err;
        res.send(results);
      });

}

const createcomment = (req, res) => {

    db.query('INSERT INTO comments SET ?', req.body, (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId, ...req.body });
      });

}





module.exports = {
    getcomments,
    createcomment

}