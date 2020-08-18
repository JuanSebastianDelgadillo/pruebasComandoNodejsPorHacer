const argv = require('yargs')
    .command('crear', 'Funcion para crear una tabla de multiplicar', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('listar', 'Funcion para listar una tabla', {
        descripcion: {
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Funcion para listar una tabla', {
        descripcion: {
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            demand: true,
            alias: 'c',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('borrar', 'Funcion para listar una tabla', {
        descripcion: {
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}