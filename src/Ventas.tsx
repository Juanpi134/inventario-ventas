import Header from "./componentesVentas/Header";
import Buscador from "./componentesVentas/Buscador";
import TablaProductosVenta from "./componentesVentas/TablaProductosVentas";
import { useState } from "react";
import type {Producto} from './types/Producto'
export default function Ventas(){
    //estados
    const [search, setSearch] = useState("");

    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: "Coca Cola",
            precio: 2000,
            stock: 20
        },
        {
            id: 2,
            nombre: "Arroz",
            precio: 1500,
            stock: 15
        }
    ]);



    const productosFiltrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const agregarAlCarrito = (producto:Producto) => {

        console.log(producto);

    };

    return <div>
     <Header
    appName="Sistema de Inventario"
    titulo="Ventas"
/>
        <Buscador search={search}
    setSearch={setSearch}></Buscador>

<TablaProductosVenta productos={productosFiltrados}
                onAgregar={agregarAlCarrito}/>

    </div>

    
        
}