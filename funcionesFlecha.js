// Funciones sin parámetros
function mostrarClasica() {
    console.log("Función clásica");
}
const mostrarFlecha = () => {
    console.log("Función flecha");
}

// Funciones con parámetros de entrada
function entradaClasica(tipo) {
    console.log("Función ", tipo);
}
const entradaFlecha = (tipo) => {
    console.log("Función ", tipo);
}

// Funciones con parámetros de salida
function salidaClasica() {
    return ("Función clásica");
}
const salidaFlecha = () => {
    return ("Función flecha");
}
const salidaFlechaReducida = () => ("Función flecha reducida");


// Funciones con parámetros de entrada y salida
function sumaClasica(num1, num2) {
    return num1 + num2;
}
const sumaFlecha = (num1, num2) => {
    return num1 + num2;
}
const sumaFlechaReducida = (num1, num2) => (num1 + num2);

// Ejecución de las funciones
console.log('>>>>>> Sin parámetros')
mostrarClasica();
mostrarFlecha();

console.log('>>>>>> Parámetros de entrada')
entradaClasica("clásica");
entradaFlecha("flecha");

console.log('>>>>>> Parámetros de salida')
console.log(salidaClasica());
console.log(salidaFlecha());
console.log(salidaFlechaReducida());


console.log('>>>>>> Parámetros de entrada y salida')
console.log("Función clásica: ", sumaClasica(2, 3));
console.log("Función flecha: ", sumaFlecha(2, 3));
console.log("Función flecha reducida: ", sumaFlechaReducida(2, 3));