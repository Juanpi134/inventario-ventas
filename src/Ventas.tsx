import Header from "./componentesVentas/Header";
import Buscador from "./componentesVentas/Buscador";
import { useState } from "react";

export default function Ventas(){
    //estados
    const [search, setSearch] = useState("");

    return <div>
     <Header
    appName="Sistema de Inventario"
    titulo="Ventas"
/>
        <Buscador search={search}
    setSearch={setSearch}></Buscador>
    </div>
        
}