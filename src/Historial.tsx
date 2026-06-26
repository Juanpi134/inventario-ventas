import Header from "./componentesHistorialVentas/Header"

export function Historial(){
    return <div>
        <Header
        appName="Sistema de Inventario"
        titulo="Historial de Ventas"
    />

    <Buscador />

    <TablaVentas />

    <DetalleVentaModal />
    </div>
}