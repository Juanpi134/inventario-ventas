import type {Producto} from '../types/Producto'
import './carrito.css'


type CarritoProps = {
    carrito: Producto[];
    onFinalizar: () => void;
};

export default function Carrito({ carrito,onFinalizar }: CarritoProps) {

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

    <button   className="btn-finalizar" onClick={onFinalizar}>
        Finalizar venta
    </button>

        </div>
    );
}