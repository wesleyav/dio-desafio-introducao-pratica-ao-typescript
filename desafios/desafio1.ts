// Como podemos rodar isso em um arquivo .ts sem causar erros?

// let employee = {};
// employee.code = 10;
// employee.name = "John";


const funcionario1 = {
    codigo: 10,
    nome: 'Nome1'
};

const funcionario2: { codigo: number, nome: string } = {
    codigo: 10,
    nome: 'Nome2'
}

interface Funcionario {
    codigo: number,
    nome: string
};

const objFuncionario = {} as Funcionario;
objFuncionario.codigo = 10;
objFuncionario.nome = 'Nome3';

let funcionario3: Funcionario = {
    codigo: 200,
    nome: 'Nome4'
};



