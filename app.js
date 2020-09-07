const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const color = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar')
        console.log('*********************************************')
        listarTabla(argv.base, argv.limite)
            .then(result => console.log(result))
            .catch((err) => console.log(err));
        break;
    case 'crear':
        console.log('crear')
        console.log('Base: ', argv.base)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo Creado: ', color.green(archivo)))
            .catch((err) => console.log(err));

        break;
    default:
        console.log('Comando no reconocido')
}
console.log('======================================')