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

            <h2>Carrito</h2>

            {carrito.map((p, index) => (
                <div key={index}>
                    {p.nombre} - ${p.precio}
                </div>
            ))}

            <h3>Total: ${total}</h3>

        </div>
    );
}