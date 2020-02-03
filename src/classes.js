// Las variables dentro de clases pasan a llamarse propiedades.
class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }

    mostrarSaludo(mensaje){
        return mensaje;
    }

    mostrarInfo(){
        return `
            Nombre: ${this.nombre} <br />
            Edad: ${this.edad} <br />
            <hr />
        `;
    }
}

const nuria = new Usuario('nuria', 22);
document.write(nuria.mostrarInfo());

class Estudiante extends Usuario {
    constructor(nombre, edad, carrera){
        super(nombre, edad),
        this.carrera = carrera
    }

    mostrarInfo(){
        return `
            Nombre: ${this.nombre} <br />
            Edad: ${this.edad} <br />
            Carrera: ${this.carrera} <br />    
            <hr />
        `;
    }
}

const alejandro = new Usuario('alejandro', 33, 'enfermero');
document.write(alejandro.mostrarInfo());