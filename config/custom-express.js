var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidacao = require('express-validator');
var morgan = require('morgan')
var logger = require('../servicos/logger')


module.exports = function(){
    var app = express()

    app.use(morgan("common", {
        stream:{
            write: function(mensagem){
                logger.info(mensagem)
            }
        }
    }))

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
