// 写一个get请求，返回一个json数据

// 引入express
const express = require("express");
// 创建一个express实例
const app = express();

// get请求
app.get("/users", (req, res) => {
  res.json({
    name: "张三",
    age: 18,
  });
});

// 监听端口
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

// 模拟请求
// http://localhost:3000/static