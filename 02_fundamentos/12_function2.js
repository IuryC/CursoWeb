//Armazenando uma funcao em uma variavel

const ImprimirSoma = function (a , b){
    console.log(a + b)
}
ImprimirSoma(5, 2);

//Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
  return a + b  
}

console.log(soma(5, 2));

//Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))