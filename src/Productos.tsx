import './Productos.css';
import { useState } from 'react';

export default function Productos(){

    const [isModalOpen, setIsModalOpen] = useState(false);


    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");


    const [productos, setProductos] = useState([
  { id: 1, nombre: "Coca Cola", precio: 2000, stock: 20 }
]);


const agregarProducto = () => {
  if (!nombre || !precio || !stock) return;

  const nuevoProducto = {
    id: Date.now(),
    nombre,
    precio: Number(precio),
    stock: Number(stock)
  };

  setProductos([...productos, nuevoProducto]);

  setNombre("");
  setPrecio("");
  setStock("");
  setIsModalOpen(false);
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
        <input type="text" name="" id="" placeholder='Buscar'/>
      </div>

    <div className="table">
       <div className="fila cabecera">
        <div className="columna">Nombre</div>
        <div className="columna">Precio</div>
        <div className="columna">Stock</div>
    </div>

{productos.map((p) => (
    <div className="fila" key={p.id}>
        <div className="columna">{p.nombre}</div>
        <div className="columna">{p.precio}</div>
        <div className="columna">{p.stock}</div>
    </div>
))}
    <div className="fila">
        <div className="columna">Arroz</div>
        <div className="columna">1500</div>
        <div className="columna">15</div>
    </div>
    </div>

        {isModalOpen && (
            <div className="modalOverlay">
                <div className="modal">
                    <h2>Nuevo Producto</h2>

                    <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <input placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                    <input placeholder="Stock"  value={stock} onChange={(e) => setStock(e.target.value)}/>

                    <div className="modalActions">
                        <button onClick={agregarProducto}>
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