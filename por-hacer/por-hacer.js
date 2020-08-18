const fs = require('fs');
const colors = require('colors');
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    // const data = new Uint8Array(Buffer.from(data));
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    let listado = listadoPorHacer;
    let tarea = '';

    for (let tareas of listado) {
        tarea += '================= Por hacer ============\n'.green;
        tarea += tareas.descripcion + '\n';
        tarea += tareas.completado + '\n';
        tarea += '================= Fin ============\n'.green;
    }


    console.log(tarea)
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        // listadoPorHacer[index].completado = completado;
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}