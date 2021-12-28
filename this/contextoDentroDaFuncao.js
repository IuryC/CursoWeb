// não pega o this global, mas se não estiver no modo estrito, sim!

this.name = "Enzo";
function sayMyname(){
    console.log(this.name);
}

sayMyname()