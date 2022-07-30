import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    // #saldo = 0; // https://github.com/tc39/proposal-class-fields#private-fields

    constructor(cliente, agencia, saldoInicial) {
        super(cliente, agencia, saldoInicial);
        ContaCorrente.numeroDeContas += 1;
    }

    // Sobrescrevendo o comportamento de sacar()
    sacar(valor) {
        let taxa = 1.1;
        // const valorSacado = taxa * valor;
        // super.sacar(valorSacado);
        return this._sacar(valor, taxa);
    }
}