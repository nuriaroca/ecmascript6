"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

console.log(crearObjeto('nuria', 22).mostrarInfo());