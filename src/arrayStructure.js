const persona = ['Nuria', 22, 'España'];

const [nombre, edad, pais, profesion = 'no especificado'] = persona;

const mostrarInfo = ( [nombre, , pais] = persona ) => console.log(nombre, profesion);

mostrarInfo(persona);