const express = require("express");
const path = require('path');
const app = express();
var favicon = require('serve-favicon');
let listenPort = process.env.PORT || 3000;


 //здесь наше приложение отдаёт статику
 app.use(express.static(__dirname));
 app.use(express.static(path.join(__dirname, 'build')));
 app.use(express.static(path.join(__dirname, 'public')));
 //простой тест сервера
 app.get('/ping', function (req, res) {
  return res.send('pong');
 });
 

 //обслуживание html
 app.get('/*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
 app.listen(listenPort);

