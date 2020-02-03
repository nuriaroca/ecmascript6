const nombres  = ['Nuria', 'Pau', 'Adri', 'Ester'];

// .map() permite iterar en los elementos de un array y (si se pone como parametro en el interior) ejecutar una función por cada uno de estos elementos.

const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras.`);

console.log(numero_caracteres);