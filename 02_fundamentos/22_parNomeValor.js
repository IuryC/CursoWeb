//par nome/valor

const saudacao = "opa"; //contexto léxico 1

function exec(){
    const saudacao = "Falaaa"
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua João",
        numero : 123
    },
    
}
console.log(cliente)