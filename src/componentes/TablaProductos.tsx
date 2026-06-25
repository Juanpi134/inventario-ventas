type Producto = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
};

type TablaProductosProps = {
  productos: Producto[];
  onEditar: (producto: Producto) => void;
  onEliminar: (producto: Producto) => void;
};

export default function TablaProductos({
  productos,
  onEditar,
  onEliminar
}: TablaProductosProps) {

  return (
    <div className="table">

      <div className="fila cabecera">
        <div className="columna">Nombre</div>
        <div className="columna">Precio</div>
        <div className="columna">Stock</div>
        <div className="columna">Acciones</div>
      </div>

      {productos.length === 0 ? (
        <div className="fila">
          <div className="columna">
            No hay productos para mostrar
          </div>
        </div>
      ) : (
        productos.map((p) => (
          <div className="fila" key={p.id}>

            <div className="columna">
              {p.nombre}
            </div>

            <div className="columna">
              {p.precio}
            </div>

            <div className="columna">
              {p.stock}
            </div>

            <div className="columna acciones">

              <button
                onClick={() => onEliminar(p)}
              >
                Eliminar
              </button>

              <button
                onClick={() => onEditar(p)}
              >
                Editar
              </button>

            </div>

          </div>
        ))
      )}

    </div>
  );
}