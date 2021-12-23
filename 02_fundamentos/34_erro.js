function ImprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch(e){
        
    }
   // console.log(obj.name.toUpperCase() + "!!!")
}
const obj = { nome: "Roberto" }
ImprimirNomeGritado(obj)