const mostrarDatos = (...datos) => {
    console.log(datos);
}
// Podemos pasar todos los datos de un array como argumentos de una función utiliando "..."
const arregloDatos = ['Nuria', 22, 'correo@correo', 'España'];
mostrarDatos(...arregloDatos);