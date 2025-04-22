/*let variavel = 10;
let numero:number = 10;
let string:string = "10";
const boleano = true //false
let vetor:number[] = []
const vetorString:string[] = []

vetor = [1,2,3]

//Adicionar um valor no vetor
vetor.push(10)
vetorString.push("Terezinho")
console.log(vetor)
let nomeMateria:string = "Frameworks I"
console.log(nomeMateria)

//Objetos em javascript

const objEstudante = {
    nome: "Laurizi Perdida",
    idade:17,
    cpf:"064.126.876-30"
}
//objEstudante.cpf = "135.679.854-60"
//console.log(objEstudante)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Crie um vetor com dois objetos de Estudante
//nome, cpf, idade
//Monstre no console.log



const alunoum = {
    nome: "Juan",
    idade:17,
    cpf:"070.269.891-11"
}
const alunodois = {
    nome: "Laurizi Perdida",
    idade:17,
    cpf:"064.126.876-30"
}

const vetorobj2estudantes = [alunoum, alunodois]

console.table(vetorobj2estudantes)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Type
type PessoaType = {
    nome: string;
    idade: number;
}
const objPessoa:PessoaType = {
    nome:"Juan",
    idade: 17
} 

//Podemos colocar mais de um 
// tipo para um objeto/variável

//Em Objetos podemos utilizar a | também
//fica assim:

type TypeMaisDeUmTipo = {nome:string|number}
const objMaisDeUmTipo:TypeMaisDeUmTipo = {
    nome:"Juan"
}

//com isso podemos colocar uma propriedade de um objeto com mais de um tipo de dados
// Agora passamos para funçoes
//Funções em Javascript
function somas(a,b){
    return a+b;
}

const resultado = somas(10,20)
console.log(`O resultado da soma é: ${resultado}`)

/////////////////////////////////////////////////////////////////////////////////////////////

//Outras formas de escrever a função
function somA(a:number,b:number):number{
    return a+b;
}

const somB = function (a:number,b:number):number|undefined{
    return a+b;
}
const somC = (a:number,b:number):number[]=>{
    return [a+b];
}
const somD = (a:number,b:number)=>a+b;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Crie uma funçao que receba um vetor e some
//os número do vetor

//10

//quando o vetor passado for vazio:
//retorna undefined
function soma(vetor:number[]){
    if(vetor.length == 0){
        return undefined
    }
    let s = 0
    for(let i=0;i<vetor.length;i++){
        s = s + vetor[i]
    }
    return s
}
console.log(soma([1,2,3,4]))

///////////////////////////////////////////////////////////////////////////////////////////

function somaNumeros(vetor:number[]){
    if(vetor.length == 0){
        return undefined
    }
    let s = 0
    let i=0
    while(i<vetor.length){
        s = s + vetor[i]
        i++
    }
    return s
}
console.log(soma([1,2,3,4]))

//= ---> ATRIBUIÇÃO
//== ---> IGUALDADE
//=== ---> IGUALDADE DE VALOR E TIPO

/////////////////////////////////////////////////////////////////////////////////////////////////

//Crie uma função que receba um vetor e um numero

//Sua funçao deve somar as posições do vetor elevado
// ao número recebido por parâmetro

//exemplo
//somasomaElevado([2,2,2],2) //12*/

//se o vetor for vazio devolva undefined
// function somaElevado(vetor:number[],numero:number){
//     if(vetor.length == 0){
//         return undefined
//     }
//     let s = 0
//   for(let i = 0;i<vetor.length;i++){
//     s = vetor[i] ** numero + s
//   }
//   return s
// }
// console.log(somaElevado([1,2,3],3))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//faça uma função que receba 2 números e devolva um vetor
//da sequencia dos números

//ex sequencia(10,16) //[10,11,12,13,14,14,15,16]
// function sequencia(num1: number, num2: number): number[] {
//     let resultado: number[] = [];
    
//     if (num1 < num2) {
//         for (let i = num1; i <= num2; i++) {
//             resultado.push(i);
//         }
//     } else {
//         for (let i: number = num1; i >= num2; i--) {
//             resultado.push(i);
//         }
//     }
    
//     return resultado;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// // Testes
// console.log(sequencia(10, 1)); 

/*Função de vetores 
.find  ----> Procurar
.filter -----> filtrar
*/
// const vetor = [1,2,3,4,5]
// function predicado(valorBuscado){
//      if(valorBuscado < 5){
//         return true
//      }
//      else{
//         return false
//      }
// }  
// console.log(vetor.filter(predicado))
/* Assincronidade -> Caracteristica tambem do javascript de não executar as linhas de codigo em sequencia
then / catch
await / async
*/

//promises
// function demora(){
//     const pro = new Promise((resolve,reject)=>{
//         //Assincronidade
//         setTimeout(() => {
//             if(Math.random()<.1){
//                 resolve("Dados!!!")
//             }
//             else{
//                 reject("Ma hoy, mas não funciona né!")
//             }
//         }, 1000)
//     })
//     return pro
// }
// console.log("inicio de codigo.")

// const resultado = demora()
// resultado.then((dados)=>{console.log("Resultado Promessa: "+dados)})
// .catch((erro)=>{console.log(erro)})


// console.log("executei CONSOLE 2.")

// //await / async
// //Novo javascript trouxe esse novo conceito de await e async
// //await -> é pra você ficar esperando algo que é assíncrono (async).

// //porém não podemos utilizar await sem ser em uma função assíncrona (async).

// async function aux(){
//     try{

//         const resultado = await demora()
//         console.log("Dados após await: "+resultado)
//     }
//     catch(erro){
//         console.log("erro no TRY/CATCH: "+erro)
//     }
// }
// aux()

import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import cors from '@fastify/cors'
const app = fastify()
app.register(cors)

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando")
})
app.get('/estudantes', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn =  await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'banco1023a',
            port: 3306
        })
        const resultado =  await conn.query("SELECT * FROM estudantes")
        const [dados, camposTabela] = resultado
        reply.status(200).send(dados)
    }
    catch (erro: any) {
        if (erro.code === 'ECONNREFUSED') {
            console.log("ERRO: LIGUE O LARAGAO => Conexão Recusada")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGAO => Conexão Recusada"})
        } else if (erro.code === 'ER_BAD_DB_ERROR') {
            console.log("ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO"})
        } else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log("ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO"})
        } else if (erro.code === 'ER_NO_SUCH_TABLE') {
            console.log("ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY")
            reply.status(400).send({mensagem:"ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY"})
        } else if (erro.code === 'ER_PARSE_ERROR') {
            console.log("ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS")
            reply.status(400).send({mensagem:"ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO: NÃO IDENTIFICADO"})
        }
    }
})

app.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})