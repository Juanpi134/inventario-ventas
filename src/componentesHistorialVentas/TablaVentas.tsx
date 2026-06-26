import type { Venta } from '../types/Venta'
import './table.css';


type TablaVentasProps = {
    ventas: Venta[];
    onVerDetalle: (venta: Venta) => void;
};

export default function TablaVentas({
    ventas,
    onVerDetalle,
}: TablaVentasProps) {
    return (
        <div className="table">

            <div className="fila cabecera">
                <div className="columna">Fecha</div>
                <div className="columna">Productos</div>
                <div className="columna">Total</div>
                <div className="columna">Acción</div>
            </div>

            {ventas.map((venta) => (
                <div className="fila" key={venta.id}>

                    <div className="columna">
                        {venta.fecha}
                    </div>

                    <div className="columna">
                        {venta.productos.length}
                    </div>

                    <div className="columna">
                        ${venta.total}
                    </div>

                    <div className="columna">
                        <button
                            onClick={() => onVerDetalle(venta)}
                        >
                            Ver detalle
                        </button>
                    </div>

                </div>
            ))}

        </div>
    );
}