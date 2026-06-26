import type { ItemCarrito } from '../types/ItemCarrito';
import './carrito.css'


type CarritoProps = {
    carrito: ItemCarrito[];
    onFinalizar: () => void;
    onEliminar: (id: number) => void;
};

export default function Carrito({ carrito,onFinalizar,onEliminar }: CarritoProps) {

    const total = carrito.reduce(
    (acc, item) =>
        acc + item.producto.precio * item.cantidad,
    0
);

    return (
        <div>

           <h2>🛒 Carrito</h2>

    {carrito.map(item => (
                <div key={item.producto.id} className="carrito-item">

                    <div>
                        {item.producto.nombre} x{item.cantidad}
                    </div>

                    <div>
                        ${item.producto.precio * item.cantidad}
                    </div>

                    <button className="btn-eliminar" onClick={() => onEliminar(item.producto.id)}>
                        x
                    </button>

                </div>
            ))}

            <div className="carrito-total">
                Total: ${total}
            </div>

            <button
                className="btn-finalizar"
                onClick={onFinalizar}
            >
                Finalizar venta
            </button>

        </div>
    );
     
   
}