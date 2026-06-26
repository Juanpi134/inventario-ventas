import type {Producto} from '../types/Producto'
type CarritoProps = {
    carrito: Producto[];
};

export default function Carrito({ carrito }: CarritoProps) {

    const total = carrito.reduce(
        (acc, p) => acc + p.precio,
        0
    );

    return (
        <div>

           <h2>🛒 Carrito</h2>

    {carrito.map((p, i) => (
        <div className="carrito-item" key={i}>

            <div className="carrito-info">
                <strong>{p.nombre}</strong>
                <span>${p.precio}</span>
            </div>

            <button className="btn-eliminar">
                x
            </button>

        </div>
    ))}

    <div className="carrito-total">
        Total: ${total}
    </div>

    <button className="btn-finalizar">
        Finalizar venta
    </button>

        </div>
    );
}