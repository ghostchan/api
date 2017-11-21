const express = require("express");
const router = express.Router();
const querystring = require("querystring");
const mysql = require("mysql");
const dbConfig = require("../db/config");

router.post("/list", function(req, res) {
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

  var selApi = "select * from params";
  connection.query(selApi,function(error, result) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("查询成功");
      console.log(result);
      connection.end();
      res.send(result);
    }
  });
});
router.post("/add", function(req, res) {
  var str = "";
  var post = "";
  req.on("data", function(data) {
    str += data;
  });
  req.on("end", function() {
    post = querystring.parse(str);
    console.log(post);
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

    var addApi = "insert into params(url,req,res) values(?,?,?)";
    var param = [post.apiUrl, post.reqParam, post.resParam];
    connection.query(addApi, param, function(error, result) {
      if (error) {
        console.log(error.message);
      } else {
        console.log("添加成功");
        connection.end();
      }
    });

    res.send(post);
  });
});
router.post("/update", function(req, res) {
  res.send("修改成功");
});
router.post("/delete", function(req, res) {
  res.send("删除成功");
});

module.exports = router;
