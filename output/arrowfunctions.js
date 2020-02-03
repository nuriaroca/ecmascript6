"use strict";

var nombres = ['Nuria', 'Pau', 'Adri', 'Ester']; // .map() permite iterar en los elementos de un array y (si se pone como parametro en el interior) ejecutar una función por cada uno de estos elementos.

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras.");
});
console.log(numero_caracteres);