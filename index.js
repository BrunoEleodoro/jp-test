var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/payload', urlencodedParser, function (req, res) {
  console.log(req.body);

});

app.listen(port, function () {
  console.log('Example app listening on port '+port);
});
