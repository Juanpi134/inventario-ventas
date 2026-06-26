import Header from "./componentesVentas/Header";
import Buscador from "./componentesVentas/Buscador";
import TablaProductosVenta from "./componentesVentas/TablaProductosVentas";
import { useState } from "react";
import type {Producto} from './types/Producto'
import Carrito from "./componentesVentas/Carrito";
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


    const [carrito, setCarrito] = useState<Producto[]>([]);

    const productosFiltrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const agregarAlCarrito = (producto:Producto) => {

        setCarrito([...carrito, producto]);

    };

    const [ventaConfirmada, setVentaConfirmada] = useState(false);

    const finalizarVenta = () => {

    if (carrito.length === 0) return;

    // mostrar modal
    setVentaConfirmada(true);

    // vaciar carrito
    setCarrito([]);
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

                <Carrito carrito={carrito} />

    </div>

    
        
}