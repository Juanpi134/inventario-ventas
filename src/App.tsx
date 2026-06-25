import Productos from "./Productos";
import Ventas from "./Ventas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return (
   <BrowserRouter>

      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/ventas" element={<Ventas />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
