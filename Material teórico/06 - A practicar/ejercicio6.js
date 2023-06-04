const personas = [
    {
        nombre: "Federico",
        edad: 29,
        ciudad: "Buenos Aires"
    },
    {
        nombre: "María",
        edad: 30,
        ciudad: "Mendoza"
    },
    {
        nombre: "Agostina",
        edad: 21,
        ciudad: "Bogotá"
    }
];

function crearMensajesDePresentacion(personas) {
    const mensajes = [];

    personas.forEach(persona => {
        const mensaje = `Mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;

        mensajes.push(mensaje);
    });

    return mensajes;
}

const mensajesDePresentacion = crearMensajesDePresentacion(personas);
mensajesDePresentacion.forEach(mensaje => {
    console.log(mensaje);
});
