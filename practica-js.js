// ============ RETO 1: funciones ============
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log("--- Reto 1 ---");
console.log(sumar(8, 2));
console.log(restar(8, 2));
console.log(multiplicar(8, 2));
console.log(dividir(8, 2));
console.log(calcularPromedio(3, 4, 5));

// console.log muestra un valor en pantalla.
// return devuelve un valor para poder usarlo después.

// ============ RETO 2: funciones flecha ============
const cuadrado = numero => numero * numero;
const esMayorEdad = edad => edad >= 18;
const nombreCompleto = (nombre, apellido) => nombre + " " + apellido;

console.log("--- Reto 2 ---");
console.log(cuadrado(5));
console.log(esMayorEdad(20));
console.log(nombreCompleto("Juan", "Garcia"));

// ============ RETO 3: arreglo de productos ============
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audifonos', precio: 120000, categoria: 'Audio', stock: 8 },
  { id: 5, nombre: 'Camara', precio: 180000, categoria: 'Perifericos', stock: 4 },
  { id: 6, nombre: 'Parlantes', precio: 150000, categoria: 'Audio', stock: 0 },
  { id: 7, nombre: 'Monitor Curvo', precio: 1200000, categoria: 'Pantallas', stock: 2 },
  { id: 8, nombre: 'Disco SSD', precio: 280000, categoria: 'Almacenamiento', stock: 10 },
  { id: 9, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 25 },
  { id: 10, nombre: 'Impresora', precio: 450000, categoria: 'Oficina', stock: 1 }
];

// ============ RETO 4: forEach ============
console.log("--- Reto 4 ---");
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

// ============ RETO 5: map ============
const nombres = productos.map(p => p.nombre);
const preciosConIva = productos.map(p => p.precio * 1.19);
const nombresMayuscula = productos.map(p => p.nombre.toUpperCase());
const resumenProductos = productos.map(p => `${p.nombre} cuesta $${p.precio}`);

console.log("--- Reto 5 ---");
console.log(nombres);
console.log(preciosConIva);
console.log(nombresMayuscula);
console.log(resumenProductos);

// ============ RETO 6: filter y find ============
const caros = productos.filter(p => p.precio > 100000);
const rango = productos.filter(p => p.precio >= 50000 && p.precio <= 200000);
const audio = productos.filter(p => p.categoria === 'Audio');
const producto5 = productos.find(p => p.id === 5);

function buscarProducto(id) {
  return productos.find(p => p.id === id);
}

console.log("--- Reto 6 ---");
console.log(caros);
console.log(rango);
console.log(audio);
console.log(producto5);
console.log(buscarProducto(4));

// ============ RETO 7: some, every y reduce ============
console.log("--- Reto 7 ---");
console.log(productos.some(p => p.stock === 0));
console.log(productos.some(p => p.precio > 1000000));
console.log(productos.every(p => p.precio > 0));
console.log(productos.every(p => p.stock >= 0));

const valorInventario = productos.reduce((total, p) => total + p.precio * p.stock, 0);
console.log(valorInventario);

// ============ RETO 8: JavaScript moderno ============
console.log("--- Reto 8 ---");
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const copia = { ...productos[1], precio: 95000, stock: 6 };
const estado = copia.stock > 0 ? 'Disponible' : 'Agotado';

console.log(`${copia.nombre} cuesta $${copia.precio} y está ${estado}`);
console.log(productos[1]); 