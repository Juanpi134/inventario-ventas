import Header from "./componentesVentas/Header";
import Buscador from "./componentesVentas/Buscador";
import TablaProductosVenta from "./componentesVentas/TablaProductosVentas";
import { useState } from "react";
import type {Producto} from './types/Producto'
import Carrito from "./componentesVentas/Carrito";
import { useEffect } from "react";
import type {ItemCarrito} from './types/ItemCarrito'

export default function Ventas(){
    //estados
    const [search, setSearch] = useState("");

    const [productos, setProductos] = useState(() => {
    const data = localStorage.getItem("productos");
    return data ? JSON.parse(data) : [];
});


const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

    const productosFiltrados = productos.filter((p:Producto) =>
        p.nombre.toLowerCase().includes(search.toLowerCase())
    );



    

    const agregarAlCarrito = (producto: Producto) => {

    const existe = carrito.find(
        item => item.producto.id === producto.id
    );

    if (existe) {
        setCarrito(
            carrito.map(item =>
                item.producto.id === producto.id
                    ? {
                        ...item,
                        cantidad: item.cantidad + 1
                    }
                    : item
            )
        );
    } else {
        setCarrito([
            ...carrito,
            {
                producto,
                cantidad: 1
            }
        ]);
    }
};

    const [ventaConfirmada, setVentaConfirmada] = useState(false);

    const finalizarVenta = () => {

    if (carrito.length === 0) return;

    const nuevaVenta = {
        id: Date.now(),
        fecha: new Date().toLocaleString(),
        productos: carrito,
        total: carrito.reduce(
            (acc, item) =>
                acc + item.producto.precio * item.cantidad,
            0
        )
    };

    // traer ventas anteriores
    const ventasGuardadas = JSON.parse(
        localStorage.getItem("ventas") || "[]"
    );

    const nuevasVentas = [...ventasGuardadas, nuevaVenta];

    localStorage.setItem(
        "ventas",
        JSON.stringify(nuevasVentas)
    );

    // vaciar carrito
    setCarrito([]);

    // mostrar confirmación UI
    setVentaConfirmada(true);
};


useEffect(() => {

    if (ventaConfirmada) {
        const timer = setTimeout(() => {
            setVentaConfirmada(false);
        }, 2000);

        return () => clearTimeout(timer);
    }

}, [ventaConfirmada]);


const eliminarDelCarrito = (id: number) => {
    setCarrito(
        carrito.filter(item => item.producto.id !== id)
    );
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

                <Carrito carrito={carrito} onFinalizar={finalizarVenta} onEliminar={eliminarDelCarrito} />


                {ventaConfirmada && (
    <div className="modalOverlay">

        <div className="modalExito">

            <h2>✅ Venta realizada</h2>

            <p>La operación se completó correctamente</p>

        </div>

    </div>
)}


    </div>

    
        
}