const promesa = new Promise( (resolve, reject) => {
    // Acción que se ejecutará.
    setTimeout(() => {
        const exito = false;
        if(exito){
            resolve('La operación tuvo éxito.');
        } else {
            reject('La operación no tuvo éxito.');
        }
    }, 4000);

}).then((mensaje) => {
    // Esta alerta aparece si en la promesa tenemos resolve();
    alert(mensaje);
}).catch((mensaje) => {
    // Esta alerta aparece si en la promesa tenemos reject();
    alert(mensaje);
});