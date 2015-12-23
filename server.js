
var express = require('express');

var app = express();

var todos = [
  {what:'eating'},
  {what:'booking'}
];

app.get('/todos', function(req, res) {
  res.status(200).json(todos);
});

app.listen(8081);
