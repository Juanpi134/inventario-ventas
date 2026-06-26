import Header from "./componentesHistorialVentas/Header"
import Buscador from "./componentesHistorialVentas/Buscador"
import { useState,useEffect } from "react";
import TablaVentas from './componentesHistorialVentas/TablaVentas';

export function Historial(){

    const [search, setSearch] = useState("");
    const [ventas, setVentas] = useState<Venta[]>([]);
    const [ventaSeleccionada, setVentaSeleccionada] = useState<Venta | null>(null);

    useEffect(() => {
        const data = localStorage.getItem("ventas");
        if (data) {
            setVentas(JSON.parse(data));
        }
    }, []);

    const ventasFiltradas = ventas.filter(v =>
        v.fecha.toLowerCase().includes(search.toLowerCase())
    );

    return <div>
        <Header
        appName="Sistema de Inventario"
        titulo="Historial de Ventas"
    />

    <Buscador search={search}
    setSearch={setSearch}
/>

    <TablaVentas ventas={ventasFiltradas}
                onVerDetalle={setVentaSeleccionada}/>

    <DetalleVentaModal />
    </div>
}