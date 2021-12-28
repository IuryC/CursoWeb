// não pega o this global, somente do objeto

this.name = "João";

const dev = {
    nome: "Cleiton",
    sayMyname: function () {
        console.log(this.name)
    }
}

dev.sayMyname();