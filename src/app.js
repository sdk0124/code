"use strict";

// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });
//     if (req.url == '/')
//     {
//         res.end("여기는 루트입니다.");
//     }
//     else if (req.url == '/login')
//     {
//         res.end("여기는 로그인 페이지 입니다.");
//     }
// });

// const new_port = 3001;

// app.listen(new_port, () => {
//     console.log("http로 서버가 가동됩니다.");
// })

// module. port setting
const express = require("express");
const app = express();

// routing
const home = require("../routes/home"); // 안의 js 파일명이 index.js여야 router module을 인식했다.

// view setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> middleware 등록해주는 method

module.exports = app;