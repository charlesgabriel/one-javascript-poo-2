import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerentes.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Charles Gabriel", 123465798, 10000);
diretor.cadastrarSenha("345678912");

const diretorLogado = SistemaAutenticacao.login(diretor, "345678912");
console.log(diretorLogado);

const gerente = new Gerente("Ricardo", 456123798, 5000);
gerente.cadastrarSenha("123");

const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
console.log(gerenteLogado);