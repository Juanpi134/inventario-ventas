import Productos from "./Productos";
import Ventas from "./Ventas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import { Historial } from "./Historial";

function App(){
  return (
   <BrowserRouter>
  <Navbar />
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/historial" element={<Historial/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
