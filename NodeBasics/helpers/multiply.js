const fs = require('node:fs');
const colors = require('colors');

const crearArchivo = async (base = 5,hasta = 10, listar) => {
    try {
        console.log('======================'.green);
        console.log(`   Tabla del ${base}   `.green);
        console.log('======================'.green);

        let consola, salida = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} = ${colors.green(base * i)}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        listar ? console.log(consola) : null;

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}