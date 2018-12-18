var mysql = require('mysql');

exports.hentbrugere = function (req, res) {
    //Laver connection til DB 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password"
    });
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
            console.log("virker med hentning af bruger")
        });
    });

}
exports.hentkonti = function (req, res) {
    console.log("HER SKRIVER DEN DET"+req.body.idknr+"")
    //Laver connection til DB 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password"
    });
        con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("select * from becbank_konti where kontonummer = "+req.body.idknr+"", function (err, result) {

            if (err) throw err;
            console.log("result fra serveren hentkonti " + result);
            console.log("All selected");
            res.send(result);
            console.log("virker med hentning af konti")
        });
    });

}
exports.opretbruger = function (req, res) {
    //Laver connection til DB 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password"
    });
    //get request, hent informationen 
    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("insert into becbank_brugere(navn, efternavn, kontonummer)values('" + req.body.navn + "','" + req.body.efternavn + "'," + req.body.kontonummer + "", function (err, result) {
            if (err) throw err;
            console.log("Inserted brugerdata about " + req.body.name + " into mysql db");
            res.send(result);
        });
    });
}
exports.opretkonto = function (req, res) {
    //Laver connection til DB 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password"
    });
    //get request, hent informationen 
    con.connect(function (err) {
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected!");
        con.query("use db_becbank;", function (err, result) {
            if (err) throw err;
            console.log("connected");
        });
        con.query("insert into becbank_konti(kontonummer, saldo, rente)values('" + req.body.kontonummer + "','" + req.body.saldo + "'," + req.body.rente + "", function (err, result) {
            if (err) throw err;
            console.log("Inserted kontoinfo about " + req.body.kontonummer + " into mysql db");
            res.send(result);
        });
    });
}

