const { crearArchivo } = require('./helpers/multiply');
const argv = require('./config/yargs');

crearArchivo(argv.base, argv.hasta, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));