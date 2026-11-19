import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const disponibles = productos.filter(p => p.stock > 0);
  const hayAgotados = productos.some(p => p.stock === 0);
  const valorInventario = productos.reduce(
    (total, p) => total + p.precio * p.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <p>{hayAgotados ? 'Hay al menos un producto agotado' : 'No hay productos agotados'}</p>

      <h2>Todos los productos</h2>
      <section className="productos">
        {productos.map(p => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </section>

      <h2>Solo disponibles</h2>
      <section className="productos">
        {disponibles.map(p => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </section>
    </main>
  );
}

export default App;