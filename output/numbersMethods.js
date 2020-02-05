"use strict";

var texto = 'Hola mundo';
console.log(texto, 'termina con o:', texto.toLowerCase().startsWith('a')); //false

console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o')); //true

console.log(texto, "incluye la palabra nuria:", texto.includes('nuria')); //false

var amigos = ['Carlos', 'Alejandro', 'Cesar', 'Manuel'];
console.log(amigos.includes('Manuel')); //true

console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
})); //Alejandro

console.log(amigos.find(function (amigo) {
  return amigo === 'Manuel';
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Manuel';
})); //Index 3