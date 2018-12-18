//Til at åbne serveren
var app = require('express')();
var bcrypt = require('bcrypt-nodejs');
//Åbner serveren, ud fra express app. 
var http = require('http').Server(app);
//Til Json objekter, går at serveren kan læse json objekterne agtigt.
//Parser det om til læseligt JSON objekter for serveren. 
bodyParser = require('body-parser');

//HUSK AT BRUGE BODYPARSER TIL POST REQUESTS
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//require mysql
var mysql = require('mysql');

//get request
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
})
//get request
app.get('/forside', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

var route = require('./route/route')
route(app)



//starter serveren på port 8080
http.listen(8080, function () {
    console.log('listening on *:8080');
})
/*
//Laver connection til DB 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

//get request, hent informationen 
app.get('/hentbrugere', function (req, res) {

    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("select * from becbank_brugere;", function (err, result) {
            if (err) throw err;
            console.log("All selected");
            res.send(result);
            console.log("virker med hentning af data")
        });
    });

})
//get request, hent informationen 
app.get('/hentkonti', function (req, res) {

    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("select * from becbank_konti;", function (err, result) {
            if (err) throw err;
            console.log("All selected");
            res.send(result);
            console.log("virker med hentning af data")
        });
    });

})
//O
app.post('/opretbruger', function(req, res){
    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("insert into becbank_brugere(navn, efternavn, kontonummer)values('"+req.body.navn+"','"+req.body.efternavn+"',"+req.body.kontonummer+"", function (err, result) {
            if (err) throw err;
            console.log("Inserted brugerdata about " + req.body.name+ " into mysql db");
            res.send(result);
        });
    });
})
app.post('/opretkonto', function(req, res){
    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("insert into becbank_brugere(kontonummer,saldo01, rente01, saldo02, rente02, saldo03, rente03)values('"+req.body.kontonummer+"','"+req.body.saldo01+"',"+req.body.rente01+",'"+req.body.saldo02+"',"+req.body.rente02+",'"+req.body.saldo03+"',"+req.body.rente03+"", function (err, result) {
            if (err) throw err;
            console.log("Inserted new account data for " + req.body.kontonummer + " into mysql db");
            res.send(result);
        });
    });
})
var hash = bcrypt.hashSync("johan");
var hash2 = bcrypt.hashSync("johan");
console.log(hash + "  " + hash2);
console.log(bcrypt.compareSync("johan", hash));
console.log(bcrypt.compareSync("Johan", hash2));
*/

