import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrent.js";

const cliente1 = new Cliente("Charles", 11122233345);
const cliente2 = new Cliente("Ricardo", 88822233345);

const contaCorrenteCharles = new ContaCorrente(cliente1, 1001);
const contaCorrenteRicardo = new ContaCorrente(cliente2, 102);

contaCorrenteCharles.depositar(500);

// const valorSacado = contaCorrenteCharles.sacar(50);
// console.log(valorSacado);

console.log(contaCorrenteCharles);

let valor = 200;
contaCorrenteCharles.transferir(valor, contaCorrenteRicardo);

console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas);