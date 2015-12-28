
var express = require('express');
var cors = require('express-cors');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'example.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

var app = express();
app.use(cors());
// app.use(cors({
//   allowedOrigins: ['localhost',
//                   '192.168.245.253']
// }));
//app.use(allowCrossDomain);



var todos = [
  {
    what: 'take pills',
    when: 'every 7:00 PM',
    description: 'for high blood pressure'
  },
  {
    what: 'interview',
    when: '20151228 190000',
    who: 'Susan',
    description: 'market trend in IT industry'
  },
  {
    what: 'walking 30m.',
    when: 'every evening',
    description: 'minimum exercise for surviving'
  },
  {
    what: 'blind date',
    when: '20151231 180000',
    description: 'looking for dollrable'
  }
];

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/todos', function(req, res) {
  res.status(200).json(todos);
});

app.listen(8081);
