var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//globals
var calcArray = [];


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function(req, res) {
    console.log('server up on 3000');
});

app.get('/', function(req, res) {
    console.log('/ url hit');
    res.sendFile(path.resolve("view/index.html"));
});


app.post('/calculate', function(req, res) {
    console.log('/calculate url hit');

    var calcObjectToSend = {
        calc: calcArray
    };
    calculateReq(req);
    
        res.send(calcObjectToSend);



});

function calculateReq(req) {
    console.log('inside of calculateReq');
    if (req.body.type === 'add') {
        console.log('this is going to add');
        var add = Number(req.body.x) + Number(req.body.y);
        req.body.result = add;
        calcArray.push(req.body);

    } else if (req.body.type === 'sub') {
        console.log('server recieved sub');
        var sub = Number(req.body.x) - Number(req.body.y);
        req.body.result = sub;
        calcArray.push(req.body);
    } else if (req.body.type === 'mult') {
        console.log('server recieved mult');
        var mult = Number(req.body.x) * Number(req.body.y);
        req.body.result = mult;
        calcArray.push(req.body);
    } else if (req.body.type === 'div') {
        console.log('server recieved div');
        var div = Number(req.body.x) / Number(req.body.y);
        req.body.result = div;
        calcArray.push(req.body);
    }
}
