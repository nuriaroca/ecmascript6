"use strict";

var promesa = new Promise(function (resolve, reject) {
  // Acción que se ejecutará.
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve('La operación tuvo éxito.');
    } else {
      reject('La operación no tuvo éxito.');
    }
  }, 4000);
}).then(function (mensaje) {
  // Esta alerta aparece si en la promesa tenemos resolve();
  alert(mensaje);
})["catch"](function (mensaje) {
  // Esta alerta aparece si en la promesa tenemos reject();
  alert(mensaje);
});