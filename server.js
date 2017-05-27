var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//globals
var calcArray = [];


app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.listen(3000, function(req, res){
    console.log('server up on 3000');
});

app.get('/', function(req, res){
    console.log('/ url hit');
    res.sendFile(path.resolve("view/index.html"));
});


app.post('/calculate', function(req, res){
    console.log('/calculate url hit');

    var calcObjectToSend = {
        calc:calcArray
    };
    determinCalc(req);
    res.send(calcObjectToSend);

});

function determinCalc(req) {
    if (req.body.type === 'add') {
        var add =  Number(req.body.x) + Number(req.body.y);
        req.body.results = add;
        console.log(req.body.type);
        calcArray.push(req.body);

    }
    else if (req.body.type === 'sub') {
        var sub =  Number(req.body.x) - Number(req.body.y);
        req.body.results = sub;
        console.log(req.body.type);
        calcArray.push(req.body);
    }
    else if (req.body.type === 'mult') {
        var mult =  Number(req.body.x) * Number(req.body.y);
        req.body.results = mult;
        console.log(req.body.type);
        calcArray.push(req.body);
    }
    else if (req.body.type === 'div') {
        var div =  Number(req.body.x) / Number(req.body.y);
        req.body.results = div;
        console.log(req.body.type);
        calcArray.push(req.body);
    }

}
