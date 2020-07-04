function PagamentoDao(connection){
    this._connection = connection;
}
PagamentoDao.prototype.salva = function (pagamento, callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

PagamentoDao.prototype.atualiza = function (pagamento, callback) {
    this._connection.query('UPDATE pagamentos SET status = ? where id = ?',
        [pagamento.status, pagamento.id], callback);
}

PagamentoDao.prototype.lista = function (pagamento, callback) {
    this._connection.query('SELECT * FROM pagamentos', callback);
}

PagamentoDao.prototype.buscaPorId = function (pagamento, callback) {
    this._connection.query('SELECT * FROM PAGAMENTOS WHERE ID = {id}', callback);
}

module.exports = function () {
    return PagamentoDao;
};
