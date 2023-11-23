const salarios = [
    {
        id : 1,
        salario : 1000,
    },
    {
        id : 2,
        salario : 2000,
    },
];

const getSalario = (id, callback) => {
    const salario = salarios.find( (salario) => salario.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`No existe salario con id ${id}`);
    }
}

const id = 3;

getSalario(id, (err, salario) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('El salario es: ', salario);
});