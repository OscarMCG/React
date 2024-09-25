import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Titulo } from "./components/titulo";
import { Menu } from "./components/menu";
import { Footer } from "./components/footer";
import { Estudios } from "./components/Estudios";
import { Galeria } from "./components/Galeria";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Titulo />
    <Menu />
    <Estudios />
    <Galeria />
    <Footer />
  </StrictMode>
);
