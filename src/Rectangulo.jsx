import { useState } from "react";

function Rectangulo() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [area, setArea] = useState("");

  const calcularArea = () => {
    if (base && altura) {
      setArea(base * altura);
    }
  };

  return (
    <div className="container alinear mt-5">
      <div className="row">
        <div className="col-sm-8">
          <h3>Área del rectángulo</h3>
          <p>
            Un rectángulo es un polígono de cuatro lados donde los lados opuestos
            son iguales y todos sus ángulos son rectos. La fórmula para calcular
            su área es:
          </p>
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <p className="fw-bold">Fórmula:</p>
            <div className="row text-center">
              <p>Área = Base × Altura = b × h</p>
            </div>
            <div className="row d-flex justify-content-center">
              <img
                className="representacion-a"
                src="/mi-proyecto/images/area-rectangulo.png"
                alt="Representación del área de un rectángulo"
              />
            </div>
            <p className="fw-bold">Donde:</p>
            <p>
              La base (b) es la longitud de uno de los lados horizontales y la
              altura (h) es la longitud de uno de los lados verticales.
            </p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <h5>Ejemplo</h5>
            <div className="row d-flex justify-content-center">
              <img
                src="/mi-proyecto/images/ejemplo-rectangulo.png"
                alt="Ejemplo del área de un rectángulo"
                className="representacion-ejmp"
              />
            </div>
            <div className="row">
              <p>
                <span className="fw-bold">Área</span> = 4cm × 2cm = 8cm²
              </p>
              <p>
                <span className="fw-bold">Resultado:</span> El área del
                rectángulo con base 4cm y altura 2cm es 8cm²
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container-fluid">
          <div className="container-fluid rounded-2 cl-2 pt-3 pb-3">
            <h5>Calcular área</h5>
            <div className="row mb-4">
              <div className="col-sm-5">
                <div className="container calcular pb-2 pt-1 rounded-2 mt-2">
                  <div className="form-group mt-3 mb-2">
                    <label>Base:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={base}
                      onChange={(e) => setBase(e.target.value)}
                      placeholder="Ingrese la longitud de la base"
                    />
                  </div>
                  <div className="form-group mt-2 mb-3">
                    <label>Altura:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={altura}
                      onChange={(e) => setAltura(e.target.value)}
                      placeholder="Ingrese la longitud de la altura"
                    />
                  </div>
                  <div className="form-group mt-4 mb-3">
                    <label>Área:</label>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={area}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <p>
                  <span className="fw-bold">Fórmula:</span> Área = b × h
                </p>
                <div className="row">
                  <div className="col-sm-5 d-flex justify-content-left">
                    <img
                      src="/mi-proyecto/images/area-rectangulo.png"
                      alt="Imagen de rectángulo"
                      className="representacion-ejrc"
                    />
                  </div>
                  <div className="col-sm-7" id="ejrc-rectangulo"></div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between a-b mt-4">
              <button className="btn btn-info t" onClick={calcularArea}>
                Calcular área
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangulo;
