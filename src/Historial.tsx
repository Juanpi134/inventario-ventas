import Header from "./componentesHistorialVentas/Header"
import Buscador from "./componentesHistorialVentas/Buscador"
import { useState } from "react";
import TablaVentas
export function Historial(){

    const [search, setSearch] = useState("");

    return <div>
        <Header
        appName="Sistema de Inventario"
        titulo="Historial de Ventas"
    />

    <Buscador search={search}
    setSearch={setSearch}
/>

    <TablaVentas />

    <DetalleVentaModal />
    </div>
}