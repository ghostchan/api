const express = require("express");
const router = express.Router();
const querystring=require("querystring");

router.post("/add", function(req, res) {
  var str="";
  var post="";
  req.on("data",function(data){
    str+=data;
  });
  req.on("end",function(){
   post=querystring.parse(str);
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
