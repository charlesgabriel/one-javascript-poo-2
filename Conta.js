export class Conta {
    constructor(cliente, agencia, saldoInicial) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    // sacar(valor) {
    //     if(this._saldo >= valor) {
    //         this._saldo -= valor;
    //         return valor;
    //     }
    // }

    depositar(valor) {
        if(valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    transferir(conta, valor) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}