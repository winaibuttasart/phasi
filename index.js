var express = require('express');
var cool =require('cool-ascii-faces');
var app = express();

app.set('port', (process.env.PORT || 5000));

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

// app.listen(80, function() {
//     console.log('Chatfuel Bot-Server listening on port 80...');
// });

app.get('/bot', function(req, res) {
  //  var jsonResponse = [];
  //  jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
    //res.send(jsonResponse);
    var text = req.body.events[0].message.text
    var sender = req.body.events[0].source.userId
    console.log(res);
    res.send("yesyesyes");
});
