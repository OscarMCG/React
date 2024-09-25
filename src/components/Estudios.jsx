import "./estudios.css";
import "boxicons";
export function Estudios() {
  return (
    <div className="estudios">
      <section className="contenedor" id="estudios">
        <h2 className="subtitulo">ESTUDIOS </h2>
        <div className="contenedor-servicio">
          <img src="PC2.jpg" alt="" width="40%" />
          <div className="checklist-servicio">
            <div className="service">
              <h3 className="n-service">
                <span className="number"></span>
                <i className="bx bxl-javascript bx-burst bx-md"></i> JAVASCRIPT
              </h3>
            </div>
            <div className="service">
              <h3 className="n-service">
                <span className="number"></span>
                <i className="bx bxl-php bx-burst bx-md"></i> PHP
              </h3>
            </div>
            <div className="service">
              <h3 className="n-service">
                <span className="number"></span>
                <i className="bx bxl-html5 bx-burst bx-md"></i> HTML
              </h3>
            </div>
            <div className="service">
              <h3 className="n-service">
                <span className="number"></span>
                <i className="bx bxl-css3 bx-burst bx-md"></i> CSS
              </h3>
            </div>
            <div className="service">
              <h3 className="n-service">
                <span className="number"></span>
                <i className="bx bxl-react bx-spin bx-md"></i> React
              </h3>
            </div>
            <div className="service">
              <h3 className="n-service">
                <span className="number"></span>
                <i className="bx bxl-angular bx-burst bx-md"></i> Angular
              </h3>
            </div>
          </div>
        </div>
      </section>
      <a href="#inicio">Incio</a>
    </div>
  );
}
