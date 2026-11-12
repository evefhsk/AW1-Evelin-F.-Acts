function saludar() {
    console.log("¡Hola, bienvenido!");
}

saludar();

function saludarPersona(nombre) {
    console.log("¡Hola " + nombre + ", bienvenido!");
}

saludarPersona("Andrés");

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    }

    return false;
}

const resultadoMayorDeEdad = esMayorDeEdad(20);
console.log("¿Es mayor de edad? " + resultadoMayorDeEdad);

const esMayorDeEdadFlecha = edad => edad >= 18;

const resultadoMayorDeEdadFlecha = esMayorDeEdadFlecha(16);
console.log("¿Es mayor de edad? " + resultadoMayorDeEdadFlecha);

const compararNumeros = (numeroUno, numeroDos) => {
    if (numeroUno < numeroDos) {
        console.log("El número " + numeroUno + " es menor que " + numeroDos);
    } else if (numeroUno === numeroDos) {
        console.log("El número " + numeroUno + " es igual que " + numeroDos);
    } else {
        console.log("El número " + numeroUno + " es mayor que " + numeroDos);
    }
};

for (let iterador = 1; iterador <= 3; iterador++) {
    compararNumeros(iterador, 2);
}

const suma = (numeroUno, numeroDos) => {
    const resultado = numeroUno + numeroDos;
    console.log("El resultado de la suma es " + resultado);
};

const resta = (numeroUno, numeroDos) => {
    const resultado = numeroUno - numeroDos;
    console.log("El resultado de la resta es " + resultado);
};

const operacion = (numeroUno, numeroDos, callback) => {
    if (typeof numeroUno != "number" || typeof numeroDos != "number") {
        console.log("Debe ingresar solo números.");
        return;
    }

    callback(numeroUno, numeroDos);
};

operacion(10, 4, suma);
operacion(10, 4, resta);
operacion("10", 4, suma);
