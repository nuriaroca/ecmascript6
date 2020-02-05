const texto = 'Hola mundo';

console.log(texto, 'termina con o:', texto.toLowerCase().startsWith('a')); //false
console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o')); //true
console.log(texto, "incluye la palabra nuria:", texto.includes('nuria')); //false


const amigos = ['Carlos', 'Alejandro', 'Cesar', 'Manuel'];

console.log(amigos.includes('Manuel')); //true
console.log(amigos.find(amigo => amigo.length > 6)); //Alejandro
console.log(amigos.find(amigo => amigo === 'Manuel'));
console.log(amigos.findIndex(amigo => amigo === 'Manuel')); //Index 3

