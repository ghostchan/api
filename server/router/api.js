const express = require("express");
const router = express.Router();
const querystring = require("querystring");
const mysql = require("mysql");
const dbConfig = require("../db/config");
//创建一个connection
var connection = mysql.createConnection(dbConfig);

router.post("/add", function(req, res) {
  var str = "";
  var post = "";
  req.on("data", function(data) {
    str += data;
  });
  req.on("end", function() {
    post = querystring.parse(str);

    //创建一个connection
    connection.connect(function(err) {
      if (err) {
        console.log("[query] - :" + err);
        return;
      }
      console.log("[connection connect]  succeed!");
    });

    var addApi = "insert into user(uid,userName) values(?,?)";
    var param = [22, 100];
    connection.query(addApi, param, function(error, result) {
      if (error) {
        console.log(error.message);
      } else {
        console.log("添加失败");
      }
    });

    // connection.end();
    res.send(post);
  });
});
router.post("/update", function(req, res) {
  res.send("修改成功");
});
router.post("/delete", function(req, res) {
  res.send("删除成功la");
});

module.exports = router;
