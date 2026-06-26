type Producto = {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
};

type TablaProductosVentaProps = {
    productos: Producto[];
    onAgregar: (producto: Producto) => void;
};

export default function TablaProductosVenta({
    productos,
    onAgregar
}: TablaProductosVentaProps) {

    return (

        <div className="table">

            <div className="fila cabecera">

                <div className="columna">Nombre</div>
                <div className="columna">Precio</div>
                <div className="columna">Stock</div>
                <div className="columna">Acción</div>

            </div>

            {productos.map((producto) => (

                <div className="fila" key={producto.id}>

                    <div className="columna">
                        {producto.nombre}
                    </div>

                    <div className="columna">
                        ${producto.precio}
                    </div>

                    <div className="columna">
                        {producto.stock}
                    </div>

                    <div className="columna">

                        <button
                            onClick={() => onAgregar(producto)}
                        >
                            Agregar
                        </button>

                    </div>

                </div>

            ))}

        </div>

    );

}