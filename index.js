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

    var no_1 = req.query.no1*1;
    var no_2 = req.query.no2*1;
    var no_3 = req.query.no3*1;
    var no_4 = req.query.no4*1;
    var no_5 = req.query.no5*1;
    var no_6 = req.query.no6*1;
    var no_7 = req.query.no7*1;
    var no_8 = req.query.no8*1;

    // console.log("no_1  = "+no_1);
    // var tmp = no_1+no_2;
    // console.log("tmp  = "+tmp);
    // jsonResponse.push({"text" : "No1 : "+no_1});
    // jsonResponse.push({"text" : "sum no1 + no2 : "+tmp});

    var child = req.query.childrenPrice;
    var disa = req.query.disable;
    var divor = req.query.divorce;
    var mar = req.query.marry;
    var hom = req.query.home;
    var insur = req.query.Insure;
    var lt = req.query.LTF;
    var par = req.query.parent;
    var pari = req.query.parentInsure;
    var partner = req.query.partnerInsure;
    var pen = req.query.pension;
    var penc = req.query.pensionchip;
//    var provi = req.query.provident;
    var rm = req.query.RMF;
//    var sara = req.query.salary;
    var soci = req.query.socialFund;
    var th = req.query.thaiTour;
    var st = req.query.steps;


    var total = 0;
    var sum = 0;
    if(no_1 > 0){
      // choose state one (รายได้พึงประเมิน)
      sum = sum+no_1+no_2+no_3+no_4+no_5+no_6+no_7+no_8;
      if((no_1 + no_2)*0.5 > 100000){
        total = total + 100000;
      }else{
        total = total +  ((no_1 + no_2)*0.5 );
      }                                           // finish no_1 and no_2
      if(no_3*0.5 > 100000){
        total = total + 100000;
      }else{
        total =total + (no_3*0.5);
      }                                         // finish no_3
      total = total + no_4;                     // finish no_4
      total = total + (no_5*0.2);               // finish no_5
      total = total + (no_6*0.3);               // finish no_6
      total = total * (0.7);                    // finish no_7
      total = total + (no_8*0.4);               // finish no_8

    }else{
      // choose state two  (ลดหย่อนภาษี)


    }



//    var s01 = req.query.steps;

    //jsonResponse.push({"text" : "step : "+s01});
    //jsonResponse.push({"text" : "total : "+total});

    // jsonResponse.push({"text" : "No1 : "+no_1});
    // jsonResponse.push({"text" : "No2 : "+no_2});
    // jsonResponse.push({"text" : "No3 : "+no_3});
    // jsonResponse.push({"text" : "No4 : "+no_4});
    // jsonResponse.push({"text" : "No5 : "+no_5});
    // jsonResponse.push({"text" : "No6 : "+no_6});
    // jsonResponse.push({"text" : "No7 : "+no_7});
    // jsonResponse.push({"text" : "No8 : "+no_8});
     jsonResponse.push({"text" : "รวมเงินได้พึงประเมิน : "+sum});
     jsonResponse.push({"text" : "รวมค่าใช้จ่าย : "+total});
    // jsonResponse.push({"text" : "รวมค่าลดหย่อน : "+lod});
     jsonResponse.push({"text" : "พึงประเมิน - ค่าใช้จ่าย : "+(sum-total)});
    // jsonResponse.push({"text" : "พึงประเมิน - ค่าใช้จ่าย - ค่าลดหย่อน : "+(sum-total -lod)});
    // var sudti = sum-total -lod;
    // var last = 0;




  //  jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..."+gnder+"  salary  = "+salary});

    res.send(jsonResponse);
});
