// Carcaterísitca var #1
// Podríamos redeclarar variables, esto puede causar problemas.

var nombre = 'Carlos';
var nombre = 'Arturo';

let pais = 'España';

console.log('Hola ' + nombre);


// Carcaterísitca var #2
// let y const, al igual que var, tienen un scope en el que no podemos acceder a las variables creadas dentro de una funcion.

function saludo(){
    let nombre = 'Nuria';
    return 'Hola ' + nombre;
}

console.log(nombre);


// Característica #3
// let y const tienen un scope de tipo bloque, no se puede acceder a ellas desde fuera de este.

var edad = 18;
if (edad >= 18){
    var esAdulto = true;
}
// Con var podemos hacer console.log() de la variable fuera del bloque.
console.log('Con '+ edad + ' años es mayor de edad? ' + esAdulto);

let años = 15;
if (años < 18){
    let esAdulto = false;
    console.log('Con '+ años + ' años es mayor de edad? ' + esAdulto);
}


// Característica #4
// Utilizamos const cuando queremos que el valor de una variable nunca cambie.
// Las constantes solo se pueden leer, no modificar.

const nombre = 'Nuria';
// nombre = 'Ester';

// Podemos modificar el array original con la herramienta .push()
const colores = ['Rojo', 'Verde'];
colores.push('Azul');

console.log(colores);
