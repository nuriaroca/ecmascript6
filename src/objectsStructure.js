const usuario = {
    nombre: 'Nuria',
    correo: 'nuria@bgrf',
    edad: 22,
    pais: 'españa',
    profesion: 'web developer'
}

// const {nombre, pais, profesion = 'NE'} = usuario;

const mostrarInfo = ( { nombre, profesion } ) => console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario);