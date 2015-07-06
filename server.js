var express = require('express');
var app = express();

var host = '192.168.2.10';
var port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(port);

  console.log('Example app listening at http://' + host + ':' + port);