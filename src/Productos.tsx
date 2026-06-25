import './Productos.css';
import { useState } from 'react';

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


    const [productos, setProductos] = useState([
  { id: 1, nombre: "Coca Cola", precio: 2000, stock: 20 }
]);

const productosFiltrados = productos.filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase()))



const eliminarProducto = (id:number) => {
  setProductos(productos.filter(p => p.id !== id));
};


const editarProducto = (producto: Producto) => {
  setProductoEditando(producto);
  setNombre(producto.nombre);
  setPrecio(String(producto.precio));
  setStock(String(producto.stock));
  setIsModalOpen(true);
};


const guardarProducto = () => {

  if (!validar || !nombre || !precio || !stock) return;

  if (productoEditando) {

    // EDITAR
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

    // CREAR
    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre,
      precio: Number(precio),
      stock: Number(stock)
    };

    setProductos([...productos, nuevoProducto]);
  }

  // LIMPIAR FORMULARIO
  setNombre("");
  setPrecio("");
  setStock("");
  setProductoEditando(null);
  setIsModalOpen(false);
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

      <div className="header">
        <h1>Productos</h1>
      </div>

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


    
     {productosFiltrados.map((p) => (
    <div className="fila" key={p.id}>
      <div className="columna">{p.nombre}</div>
      <div className="columna">{p.precio}</div>
      <div className="columna">{p.stock}</div>

        <div className='columna acciones'>
            <button onClick={() => eliminarProducto(p.id)}>
                Eliminar
            </button>

            <button onClick={() => editarProducto(p)}>
                Editar
            </button>
        </div>

    </div>
  ))}



    
    </div>

        {isModalOpen && (
            <div className="modalOverlay">
                <div className="modal">
                    <h2>Nuevo Producto</h2>

                    <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    {errorNombre && <p className="error">{errorNombre}</p>}
                    <input placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                    {errorNombre && <p className="error">{errorPrecio}</p>}
                    <input placeholder="Stock"  value={stock} onChange={(e) => setStock(e.target.value)}/>
                    {errorNombre && <p className="error">{errorStock}</p>}
                    <div className="modalActions">
                        <button onClick={guardarProducto}>
                            Guardar
                      </button>

                         <button onClick={() => setIsModalOpen(false)}>
                            Cancelar
                        </button>        
                        </div>
                </div>
            </div>
        )}

    </div>

    
}