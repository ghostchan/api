const express = require("express");
const router = express.Router();

router.post("/add", function(req, res) {
  res.send("添加成功");
});
router.post("/update", function(req, res) {
  res.send("修改成功");
});
router.post("/delete", function(req, res) {
  res.send("删除成功la");
});

module.exports = router;
