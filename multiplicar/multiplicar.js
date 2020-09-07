const fs = require('fs');
const color = require('colors')

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('la base ingresada no es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

            console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
}

let listarTabla = async(base, limite) => {

    console.log('================================='.green)
    console.log(`==TABLA DE MULTIPLICAR NRO: ${base}==`.green)
    console.log('================================='.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}