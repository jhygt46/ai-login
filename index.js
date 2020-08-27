var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var fs = require('fs');
var helpers = require('./helpers');
var config = JSON.parse(fs.readFileSync('./config.json'));

var list = ["gmail.com", "yahoo.com", "hotmail.com"];
var list_no = ["outlook.com", "vtr.cl", "emol.com"];

var mails = {};
var data = [{}];

app.get('/', function(req, res){

    res.setHeader('Content-Type', 'text/plain');
    res.end("AI");
    
});
app.post('/add_correo', urlencodedParser, function(req, res){

    res.setHeader('Content-Type', 'text/plain');
    res.end("Listo");
    var correo = req.body.correo;
    var add = add_mail(randomMail(), 12);
    io.emit('nuevo_correo', correo);

    
});
app.get('/test_search', urlencodedParser, function(req, res){

    res.setHeader('Content-Type', 'text/plain');
    /*
    const len = 10000;
    var x = 0, y = 0;
    for(var i=0; i<len; i++){
        var mail = randomMail();
        if(search_mail(mail)){ x++; }else{ y++; }
    }
    res.end("ENCONTRADOS: ("+x+") "+(x / len * 100)+"% - NO ENCONTRADOS: ("+y+") "+(y / len * 100)+"%");
    */
   
});
app.post('/search', urlencodedParser, function(req, res){

    res.setHeader('Content-Type', 'text/plain');
    var correo = req.body.correo;

    

    if(search_mail(correo)){
        res.end("TRUE");
    }
    res.end("FALSE");
    
    /*
    const len = 10000;
    var x = 0, y = 0;
    for(var i=0; i<len; i++){
        var mail = randomMail();
        if(search_mail(mail)){ x++; }else{ y++; }
    }
    res.end("ENCONTRADOS: ("+x+") "+(x / len * 100)+"% - NO ENCONTRADOS: ("+y+") "+(y / len * 100)+"%");
    */
   
    
});

app.listen(config.port, () => {
    fs.appendFile('init.log', 'Servidor iniciado a las ' + new Date().toLocaleString() + ' en puerto ' + config.port + '\n', function(err){ if(err) return console.log(err) });
});