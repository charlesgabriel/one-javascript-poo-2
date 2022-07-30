import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Charles", 11122233345);

const contaCorrenteCharles = new ContaCorrente(cliente1, 1001, 100);
contaCorrenteCharles.depositar(500);
contaCorrenteCharles.sacar(100);

// const valorSacado = contaCorrenteCharles.sacar(50);
// console.log(valorSacado);

const contaPoupanca = new ContaPoupanca(cliente1, 1002, 50);

console.log(contaPoupanca);
console.log(contaCorrenteCharles);