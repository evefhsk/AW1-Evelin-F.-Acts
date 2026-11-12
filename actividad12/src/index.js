const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("Ingrese un número:"));
    numeros.push(numero);
}

console.log(numeros);

const numerosImpares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        numerosImpares.push(numeros[i]);
    }
}

console.log(numerosImpares);

const frutas = ["pera", "manzana", "banana", "durazno"];
const frutasMayusculasForEach = [];

frutas.forEach((fruta) => {
    frutasMayusculasForEach.push(fruta.toUpperCase());
});

console.log(frutasMayusculasForEach);

const frutasMayusculasMap = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

console.log(frutasMayusculasMap);

const frutasConNa = frutas.filter((fruta) => {
    if (fruta.includes("na")) {
        return true;
    }

    return false;
});

console.log(frutasConNa);

const producto = {
    nombre: "Campera",
    precio: 45000,
    stock: 8,
    talles: ["s", "m", "l"]
};

console.log(producto);

const productos = [
    {
        nombre: "Remera",
        precio: 18000,
        stock: 3,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Pantalón",
        precio: 35000,
        stock: 12,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Buzo",
        precio: 42000,
        stock: 4,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Camisa",
        precio: 28000,
        stock: 15,
        talles: ["s", "m", "l"]
    }
];

productos.forEach((producto) => {
    if (producto.stock < 5) {
        console.log(producto);
    }
});

const productosConDescuento = productos.map((producto) => {
    const productoNuevo = {
        nombre: producto.nombre,
        precio: producto.precio * 0.9,
        stock: producto.stock,
        talles: producto.talles
    };

    return productoNuevo;
});

console.log(productosConDescuento);

const productosConStock = productos.filter((producto) => {
    if (producto.stock > 10) {
        return true;
    }

    return false;
});

console.log(productosConStock);
