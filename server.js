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


//Laver connection til DB 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

//get request 2, hent pærerne
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
//starter serveren på port 8080
http.listen(5050, function () {
    console.log('listening on *:5050');
});