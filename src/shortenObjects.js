const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo(){ return `${nombre} tiene ${edad} años`}
    }
}

console.log(crearObjeto('nuria', 22).mostrarInfo());
