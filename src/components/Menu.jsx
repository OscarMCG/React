import { useState } from "react";
import "./menu.css";
export function Menu() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="menuDesplegable">
      <button onClick={toggleMenu} className="botonMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 
          4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
          />
        </svg>
      </button>
      <nav className={`menuNav ${menu ? "activo" : ""}`}>
        <ul className="ulMenu">
          <a className="listaM" href="#inicio">
            Inicio
          </a>
          <a className="listaM" href="#estudios">
            Estudios
          </a>
          <a className="listaM" href="#galeria">
            Galeria
          </a>
          <a className="listaM" href="#contacto">
            Informacion
          </a>
        </ul>
      </nav>
    </div>
  );
}
