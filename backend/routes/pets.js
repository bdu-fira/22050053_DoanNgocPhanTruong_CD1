const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM pets", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi khi truy vấn dữ liệu" });
    }
    res.json(results);
  });
});

module.exports = router;