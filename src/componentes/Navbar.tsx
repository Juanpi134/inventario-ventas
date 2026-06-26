import { Link,useLocation } from "react-router-dom";
import './navbar.css'
export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">

      <Link
        to="/productos"
        className={location.pathname === "/productos" ? "active" : ""}
      >
        Productos
      </Link>

      <Link
        to="/ventas"
        className={location.pathname === "/ventas" ? "active" : ""}
      >
        Ventas
      </Link>

      <Link
        to="/historial"
        className={location.pathname === "/historial" ? "active" : ""}
      >
        Historial
      </Link>

    </div>
  );

}