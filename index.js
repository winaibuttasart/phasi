var express = require('express');
var cool =require('cool-ascii-faces');
var bodyParser = require('body-parser');
var url = require('url');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/bot', function(req, res) {

    console.log('\n\n\n\n');

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var salary = req.query.salary; // $_GET["salary"]
    console.log(salary);

    var jsonResponse = [];
    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..."+salary });
    res.send(jsonResponse);
});
