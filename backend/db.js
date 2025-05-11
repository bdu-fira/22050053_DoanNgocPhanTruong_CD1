const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456", // Đổi nếu MySQL có mật khẩu
  database: "petshop", // Trùng với tên DB trong file SQLpetshop.sql
  port: 3308
});

connection.connect((err) => {
  if (err) {
    console.error("Kết nối MySQL thất bại:", err);
    return;
  }
  console.log("Đã kết nối đến MySQL.");
});

module.exports = connection;