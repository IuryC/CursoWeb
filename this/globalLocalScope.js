//global scope
this.name = "Diego";

function sayMyname(nome){
   //local scope
    console.log(this.name)
}

sayMyname()