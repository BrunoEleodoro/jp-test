var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/payload', function (req, res) {
  console.log(req.body);
  res.send({status: 200})
});

app.listen(port, function () {
  console.log('Example app listening on port '+port);
});
