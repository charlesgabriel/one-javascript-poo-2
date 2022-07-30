import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerentes.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Charles Gabriel", 123465798, 10000);
const gerente = new Gerente("Ricardo", 456123798, 5000);
const cliente = new Cliente("Lais", 456789123, "4321");

diretor.cadastrarSenha("345678912");
gerente.cadastrarSenha("123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "345678912");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4321");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);