var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidacao = require('express-validator');


module.exports = function(){
    var app = express()

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json());

    app.use(expressValidacao());

    consign()
        .include('controllers')
        .then('persistencia')
        .then('servicos')
        .into(app)

    return app;
}
