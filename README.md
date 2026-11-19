# Tienda tecnológica · JavaScript aplicado a React

Aplicación web hecha con **React** y **Vite** que muestra un catálogo de productos tecnológicos. El proyecto aplica funciones de JavaScript (`map`, `filter`, `find`, `some`, `every`, `reduce`) y se desarrolló como parte del taller guiado **JavaScript aplicado a React**.

- **Programa:** Análisis y Desarrollo de Software (ADSO) · SENA
- **Ficha:** 3409609
- **Autor:** Juan García

## Qué hace la aplicación

- Muestra un catálogo de 10 productos, cada uno en una tarjeta.
- Calcula y muestra cuántos productos están **disponibles**.
- Indica si existe **al menos un producto agotado** usando `some()`.
- Calcula el **valor total del inventario** usando `reduce()`.
- Tiene una segunda sección que muestra **solo los productos disponibles** usando `filter()`.

## Tecnologías

| Herramienta | Uso |
|---|---|
| React | Interfaz de usuario con componentes |
| Vite | Servidor de desarrollo y empaquetado |
| JavaScript (ES6+) | Lógica y funciones sobre arreglos |
| Oxlint | Revisión de calidad del código |
| Git y GitHub | Control de versiones y repositorio |

## Estructura del proyecto

```
tienda-react/
├── practica-js.js          # Retos de JavaScript ejecutables con Node
├── package.json
├── index.html
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx             # Vista principal y cálculos del catálogo
    ├── App.css             # Estilos del catálogo
    ├── index.css           # Estilos globales
    ├── components/
    │   └── ProductoCard.jsx   # Tarjeta de un producto
    └── data/
        └── productos.js    # Arreglo de productos
```

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS)
- [Git](https://git-scm.com/)

Comprueba que están instalados:

```bash
node -v
npm -v
git --version
```

## Instalación y uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Elpepetfty/React-Js-Ficha-3409609-Juan-Garcia.git
   ```

2. Entra a la carpeta e instala las dependencias:

   ```bash
   cd React-Js-Ficha-3409609-Juan-Garcia
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm run dev
   ```

4. Abre en el navegador la dirección que muestra la terminal, normalmente `http://localhost:5173/`.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Previsualiza la versión de producción |
| `npm run lint` | Revisa el código con Oxlint |
| `node practica-js.js` | Ejecuta los retos de JavaScript en la terminal |

## Retos de JavaScript (`practica-js.js`)

El archivo `practica-js.js` reúne los ejercicios del taller y se ejecuta con `node practica-js.js`:

1. Funciones con parámetros y `return`.
2. Funciones flecha.
3. Arreglo de objetos con 10 productos.
4. Recorrer con `forEach()`.
5. Transformar con `map()`.
6. Filtrar y buscar con `filter()` y `find()`.
7. Evaluar y acumular con `some()`, `every()` y `reduce()`.
8. JavaScript moderno: template literals, desestructuración, spread y operador ternario.

Incluye además la función `buscarProducto(id)`, que devuelve el producto con ese `id` o `undefined` si no existe.

## Cómo se usan las funciones en React

```jsx
// Productos con stock
const disponibles = productos.filter(p => p.stock > 0);

// ¿Hay al menos un agotado?
const hayAgotados = productos.some(p => p.stock === 0);

// Valor total del inventario
const valorInventario = productos.reduce(
  (total, p) => total + p.precio * p.stock,
  0
);

// Una tarjeta por producto
{productos.map(p => (
  <ProductoCard key={p.id} producto={p} />
))}
```

Cada producto tiene esta forma:

```js
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 }
```

## Historial de commits

El proyecto se construyó con commits pequeños y descriptivos:

1. `feat: Inicializacion de practicas de JS`
2. `feat: ejercicios base de JavaScript`
3. `feat: Mostrar productos con React`
4. `feat: Mejora de Css`

## Autor

**Juan García** · Aprendiz SENA · ADSO · Ficha 3409609