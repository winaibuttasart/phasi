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


// var salary = req.query.salary; // $_GET["salary"]
// salary *= 12;                  //test use data
// var gnder = req.query.gender;  //test get data

app.get('/bot', function(req, res) {
    var jsonResponse = [];
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    // var no_1 = req.query.no1;
    // var no_2 = req.query.no2;
    // var no_3 = req.query.no3;
    // var no_4 = req.query.no4;
    // var no_5 = req.query.no5;
    // var no_6 = req.query.no6;
    // var no_7 = req.query.no7;
    // var no_8 = req.query.no8;

    // console.log(no_1);
    var s01 = req.query.steps;
    
    jsonResponse.push({"text" : "step : "+s01});

    // jsonResponse.push({"text" : "No1 : "+no_1});
    // jsonResponse.push({"text" : "No2 : "+no_2});
    // jsonResponse.push({"text" : "No3 : "+no_3});
    // jsonResponse.push({"text" : "No4 : "+no_4});
    // jsonResponse.push({"text" : "No5 : "+no_5});
    // jsonResponse.push({"text" : "No6 : "+no_6});
    // jsonResponse.push({"text" : "No7 : "+no_7});
    // jsonResponse.push({"text" : "No8 : "+no_8});

  //  jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..."+gnder+"  salary  = "+salary});

    res.send(jsonResponse);
});
