
module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log('ok')
        res.send('ok2')
    })

    app.post('/pagamentos/pagamento', function (req, res) {

        req.assert("forma_de_pagamento",
            "Forma de pagamento obrigatório").notEmpty();

        req.assert("valor","Valor é obrigatório e dee ser um decimal")
            .notEmpty().isFloat();

        var erros = req.validationErrors();
        if(erros){
            console.log('Erros de validação encontrado')
            res.status(400).send(erros)
            return
        }

        var pagamento = req.body;
        console.log('Processando req de novo pagamento')

        pagamento.status = 'CRIADO'
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);
        //console.log(pagamentoDao)

        pagamentoDao.salva(pagamento, function (erro, resultado) {
            if(erro){
                console.log('Erro ao inserir no db')
                res.status(500).send(erro)
            }else{
                console.log('pagamento criado')
                res.location('/pagamentos/pagamento/' + resultado.insertId)
                res.status(201).json(pagamento)
            }
        })
    })
}

