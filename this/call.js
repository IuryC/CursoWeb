//function.call(this, arg1, arg2)
//retornar o this do contexto que eu enviar

this.name = "Camilla";
this.age = 25
function sayMyname(age){
    this.age = age;
    console.log(this.name, this.age)
}

const dev = {
    name: "Isabela"
};

//sayMyname.call(this, 18);
//sayMyname.call(dev, 19);

//console.log(this.age);
//console.log(dev.age);

// function.apply(this, [arg1, arg2])
//retorna o this do contexto que eu enviar

sayMyname
