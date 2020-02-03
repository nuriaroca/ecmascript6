"use strict";

var usuario = {
  nombre: 'Nuria',
  correo: 'nuria@bgrf',
  edad: 22,
  pais: 'españa',
  profesion: 'web developer'
}; // const {nombre, pais, profesion = 'NE'} = usuario;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      profesion = _ref.profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);