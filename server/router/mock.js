const express = require("express");
const router = express.Router();
const dbConfig = require("../db/config");
const mysql = require("mysql");
router.post("/*", function(req, res) {
  var url = req.url;
  var post = "";
  //创建一个connection
  var connection = mysql.createConnection(dbConfig);
  //创建一个connection
  connection.connect(function(err) {
    if (err) {
      console.log("[query] - :" + err);
      return;
    }
    console.log("[connection connect]  succeed!");
  });

  var selRes = `select res from params where url ="${url}"`;
  console.log(selRes);
  connection.query(selRes,function(error, result) {
    if (error) {
      console.log(error.message);
    } else {
      post=result;
      console.log(post);
      connection.end();
      res.send(post);
    }
  });
  
});
module.exports = router;
