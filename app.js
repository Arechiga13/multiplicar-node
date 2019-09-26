// requires
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

const { argv } = require('./config/yargs');
// const argv = require('./config/yargs').argv //Los 2 comandos hacen lo mismo
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${ archivo.green } ha sido creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


// Referencias
// let base = 2;

// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv);
// console.log(argv.base);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base)

// crearArchivo(base)
//     .then(archivo => console.log(`El archivo tabla-${ base }.txt ha sido creado`))
//     .catch(err => console.log(err));