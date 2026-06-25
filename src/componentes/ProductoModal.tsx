type Producto = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
};

type ProductoModalProps = {
  nombre: string;
  precio: string;
  stock: string;

  errorNombre: string;
  errorPrecio: string;
  errorStock: string;

  productoEditando: Producto | null;

  setNombre: (valor: string) => void;
  setPrecio: (valor: string) => void;
  setStock: (valor: string) => void;

  guardarProducto: () => void;
  cerrarModal: () => void;
};

export default function ProductoModal({
  nombre,
  precio,
  stock,
  errorNombre,
  errorPrecio,
  errorStock,
  productoEditando,
  setNombre,
  setPrecio,
  setStock,
  guardarProducto,
  cerrarModal
}: ProductoModalProps) {

  return (
    <div className="modalOverlay">
      <div className="modal">

        <h2>
          {productoEditando
            ? "Editar Producto"
            : "Nuevo Producto"}
        </h2>

        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        {errorNombre && (
          <p className="error">{errorNombre}</p>
        )}

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        {errorPrecio && (
          <p className="error">{errorPrecio}</p>
        )}

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        {errorStock && (
          <p className="error">{errorStock}</p>
        )}

        <div className="modalActions">

          <button onClick={guardarProducto}>
            {productoEditando
              ? "Actualizar"
              : "Guardar"}
          </button>

          <button onClick={cerrarModal}>
            Cancelar
          </button>

        </div>

      </div>
    </div>
  );
}