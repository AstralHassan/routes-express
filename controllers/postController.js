const db = require("../db");

const getALlPosts = (req, res) => {
  db.query('SELECT * FROM post', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const getSinglePost = (req, res) => {
  const postid = req?.params?.id
  db.query(`SELECT * FROM post WHERE id='${postid}' AND deletedAT is NULL`, (err, result) => {
    if (result.length > 0)
      return res.send({
        success: true,
        meg: "got posts successfully!",
        data: result
      });
    return res.send({
      success: false,
      meg: "Empty posts !",
      data: []
    });
  });
};

const createPost = (req, res) => {
  db.query('INSERT INTO post SET ?', req.body, (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, ...req.body });
  });
};

const deletePost = (req, res) => {
  db.query('DELETE FROM post WHERE id = ?', req.params.id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

const updatePost = (req , res) => {
  db.query('UPDATE posts SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

const getMyPost = (req, res) => {
  db.query('SELECT * FROM posts WHERE user_id = ?', req.params.userId, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports = {
  getALlPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  getMyPost
};