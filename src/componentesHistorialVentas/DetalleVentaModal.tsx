import type { Venta } from "../types/Venta";
import './modal.css';


type Props = {
    venta: Venta | null;
    onClose: () => void;
};


export default function DetalleVentaModal({ venta, onClose }: Props) {

    if (!venta) return null;

    return (
        <div className="modalOverlay">

            <div className="modal">

                <h2>Detalle de Venta</h2>

                <p>
                    <b>Fecha:</b> {venta.fecha}
                </p>

                <hr />

                {venta.productos.map((item) => (
                    <div key={item.producto.id} className="detalle-item">

                        <span>
                            {item.producto.nombre}
                        </span>

                        <span>
                            x{item.cantidad}
                        </span>

                        <span>
                            ${item.producto.precio * item.cantidad}
                        </span>

                    </div>
                ))}

                <hr />

                <h3>
                    Total: ${venta.total}
                </h3>

                <button
                    className="btn-cerrar"
                    onClick={onClose}
                >
                    Cerrar
                </button>

            </div>

        </div>
    );
}