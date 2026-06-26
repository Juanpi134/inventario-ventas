import header from './estilos/header.css'


import Buscador from "./componentesVentas/Buscador";
export default function Ventas(){
    return <div>
     <Header
    appName="Sistema de Inventario"
    titulo="Ventas"
/>
        <Buscador></Buscador>
    </div>
        
}