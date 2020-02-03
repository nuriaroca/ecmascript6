"use strict";

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
}; // Podemos pasar todos los datos de un array como argumentos de una función utiliando "..."


var arregloDatos = ['Nuria', 22, 'correo@correo', 'España'];
mostrarDatos.apply(void 0, arregloDatos);