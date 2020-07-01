
module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log('ok')
        res.send('ok2')
    })

    app.post('/pagamentos/pagamento', function (req, res) {
        var pagamento = req.body;
        console.log(pagamento)
        res.send('OK')
    })
}

