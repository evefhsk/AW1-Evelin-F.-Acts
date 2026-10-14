// Ejercicio 1.a
let edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//Ejercicio 1.b
let numero = 10;
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// Ejercicio 1.c
let nota = 8;
if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}

//Ejercicio 2.a
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Ejercicio 2.b
for(let i = 10; i >= 1; i--){
    console.log(i)
}

//Ejercicio 2.c
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}


//Ejercicio 2.d
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log('El número' + i +  'es par');
  } else {
    console.log('El número' + i + 'es impar');
  }
}
