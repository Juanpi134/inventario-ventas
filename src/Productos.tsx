import './Productos.css';
import Header from './componentes/Header'; './componentes/Header'
import { useState } from 'react';
import ProductoModal from './componentes/ProductoModal';'./componentes/ProductoModal'
import ConfirmacionModal from './componentes/ConfirmacionModal'; './componentes/ConfirmacionModal';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
};

export default function Productos(){

    const [isModalOpen, setIsModalOpen] = useState(false);


    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [search, setSearch] = useState("");
    const [productoEditando, setProductoEditando] =
  useState<Producto | null>(null);

const [errorNombre, setErrorNombre] = useState("");
const [errorPrecio, setErrorPrecio] = useState("");
const [errorStock, setErrorStock] = useState("");


const [mensajeExito, setMensajeExito] = useState("");
const [productoAEliminar, setProductoAEliminar] = useState<Producto | null>(null);

    const [productos, setProductos] = useState([
  { id: 1, nombre: "Coca Cola", precio: 2000, stock: 20 }
]);

const productosFiltrados = productos.filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase()))


const confirmarEliminacion = () => {
  if (!productoAEliminar) return;

  setProductos(
    productos.filter(
      p => p.id !== productoAEliminar.id
    )
  );

  setProductoAEliminar(null);
};





const editarProducto = (producto: Producto) => {
  setProductoEditando(producto);
  setNombre(producto.nombre);
  setPrecio(String(producto.precio));
  setStock(String(producto.stock));
  setIsModalOpen(true);
};


const guardarProducto = () => {

  if (!validar() || !nombre || !precio || !stock) return;

  if (productoEditando) {

    setProductos(
      productos.map((p) =>
        p.id === productoEditando.id
          ? {
              ...p,
              nombre,
              precio: Number(precio),
              stock: Number(stock)
            }
          : p
      )
    );

  } else {

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre,
      precio: Number(precio),
      stock: Number(stock)
    };

    setProductos([...productos, nuevoProducto]);
  }

  // limpiar formulario
  setNombre("");
  setPrecio("");
  setStock("");
  setProductoEditando(null);

  // mensaje primero
  setMensajeExito(
    productoEditando
      ? "Producto actualizado correctamente"
      : "Producto creado correctamente"
  );

  // cerrar modal después (mejor UX)
  setTimeout(() => {
  setIsModalOpen(false);
  setMensajeExito("");
}, 2000)
};



const validar = () => {
  let valido = true;

  if (!nombre) {
    setErrorNombre("El nombre es obligatorio");
    valido = false;
  } else {
    setErrorNombre("");
  }

  if (!precio || Number(precio) <= 0) {
    setErrorPrecio("El precio debe ser mayor a 0");
    valido = false;
  } else {
    setErrorPrecio("");
  }

  if (!stock || Number(stock) < 0) {
    setErrorStock("El stock no puede ser negativo");
    valido = false;
  } else {
    setErrorStock("");
  }

  return valido;
};


    return <div>

      <Header titulo="Productos"></Header>

{mensajeExito && (
                <p className="success">{mensajeExito}</p>
                    )}

      <div className="actions">
        <button onClick={() => setIsModalOpen(true)}>
        + Agregar producto
        </button>
      </div>


      <div className="buscador">
        <input type="text" name="" id="" placeholder='Buscar' value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>


    <div className="table">
       <div className="fila cabecera">
        <div className="columna">Nombre</div>
        <div className="columna">Precio</div>
        <div className="columna">Stock</div>
        <div className="columna">Acciones</div>
    </div>

{productos.length === 0 && (
    <div className="fila">
      <div className="columna">
        No hay productos cargados
      </div>
    </div>
  )}


  {productos.length > 0 && productosFiltrados.length === 0 && (
    <div className="fila">
      <div className="columna">
        No se encontraron resultados
      </div>
    </div>
  )}

    
     {productosFiltrados.map((p) => (
    <div className="fila" key={p.id}>
      <div className="columna">{p.nombre}</div>
      <div className="columna">{p.precio}</div>
      <div className="columna">{p.stock}</div>

        <div className='columna acciones'>
            <button onClick={() => setProductoAEliminar(p)}>
                Eliminar
            </button>

            <button onClick={() => editarProducto(p)}>
                Editar
            </button>
        </div>

    </div>
  ))}

{productoAEliminar && (
  <ConfirmacionModal
    mensaje={`¿Seguro que querés eliminar ${productoAEliminar.nombre}?`}
    onConfirmar={confirmarEliminacion}
    onCancelar={() => setProductoAEliminar(null)}
  />
)}


    
    </div>


        {isModalOpen && (
            <ProductoModal
    nombre={nombre}
    precio={precio}
    stock={stock}
    errorNombre={errorNombre}
    errorPrecio={errorPrecio}
    errorStock={errorStock}
    productoEditando={productoEditando}
    setNombre={setNombre}
    setPrecio={setPrecio}
    setStock={setStock}
    guardarProducto={guardarProducto}
    cerrarModal={() => setIsModalOpen(false)}
  />
)}





    </div>

    
}