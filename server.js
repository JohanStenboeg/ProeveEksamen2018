//Til at åbne serveren
var app = require('express')();
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
    res.sendFile(__dirname + '/index.html');
})

//Laver connection til DB 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

//get request, hent informationen 
app.get('/hent', function (req, res) {

    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("select * from becbank;", function (err, result) {
            if (err) throw err;
            console.log("All selected");
            res.send(result);
            console.log("virker med hentning af data")
        });
    });

})
app.post('/opret', function(req, res){
    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("insert into becbank(navn, efternavn, kontonummer, medarbejder, pw, saldo01, rente01, saldo02, rente02, saldo03, rente03) values ('"+req.body.navn+"','"+req.body.efternavn+"',"+req.body.kontonummer+","+req.body.medarbejder+",'"+req.body.pw+"',"+req.body.saldo01+","+req.body.rente01+","+req.body.saldo02+","+req.body.rente02+","+req.body.saldo03+","+req.body.rente03+");", function (err, result) {
            if (err) throw err;
            console.log("Inserted new data into mysql db");
            res.send(result);
        });
    });
})


//starter serveren på port 5050
http.listen(5050, function () {
    console.log('listening on *:5050');
})