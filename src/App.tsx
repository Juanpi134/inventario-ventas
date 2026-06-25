import Productos from "./Productos";
import Ventas from "./Ventas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";

function App(){
  return (
   <BrowserRouter>
  <Navbar />
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/ventas" element={<Ventas />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
