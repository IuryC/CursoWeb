function ImprimirSoma(a, b){
    console.log(a + b);
}

ImprimirSoma(2, 3);
ImprimirSoma(2);
ImprimirSoma(5, 6);

//Função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 5));
console.log(soma(2));
console.log(soma());

