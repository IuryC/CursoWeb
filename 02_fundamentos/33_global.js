let a = 3;

globalThis.b = 123;
this.c = 456;

console.log(this.a);
console.log(global.b);
console.log(this.c);