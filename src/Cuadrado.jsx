import { useState } from "react";

function Cuadrado() {
  const [lado, setLado] = useState("");
  const [area, setArea] = useState("");

  const calcularArea = () => {
    if (lado) {
      setArea(lado * lado);
    }
  };

  return (
    <div className="container alinear mt-5">
      <div className="row">
        <div className="col-sm-8">
          <h3>Área del cuadrado</h3>
          <p>
            Un cuadrado es un polígono de cuatro lados iguales y ángulos rectos
            (90°). La fórmula para calcular su área es:
          </p>
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <p className="fw-bold">Fórmula:</p>
            <div className="row text-center">
              <p>Área = Lado × Lado = L²</p>
            </div>
            <div className="row d-flex justify-content-center">
              <img
                className="representacion-a"
                src="${import.meta.env.BASE_URL}images/area-cuadrado.png"
                alt="Representación del área de un cuadrado"
              />
            </div>
            <p className="fw-bold">Donde:</p>
            <p>L es la longitud de uno de los lados del cuadrado.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <h5>Ejemplo</h5>
            <div className="row d-flex justify-content-center">
              <img
                src="${import.meta.env.BASE_URL}images/ejemplo-cuadrado.png"
                alt="Ejemplo del área de un cuadrado"
                className="representacion-ejmp"
              />
            </div>
            <div className="row">
              <p>
                <span className="fw-bold">Área</span> = 2cm × 2cm = (2cm)² =
                4cm²
              </p>
              <p>
                <span className="fw-bold">Resultado:</span> El área del cuadrado
                de lado 2cm es 4cm²
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
                  <div className="form-group mt-3 mb-3">
                    <label>Lado:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={lado}
                      onChange={(e) => setLado(e.target.value)}
                      placeholder="Ingrese la longitud del lado"
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
                  <span className="fw-bold">Fórmula:</span> Área = L²
                </p>
                <div className="row">
                  <div className="col-sm-5 d-flex justify-content-left">
                    <img
                      src="${import.meta.env.BASE_URL}images/area-cuadrado.png"
                      alt="Imagen de un cuadrado"
                      className="representacion-ejrc"
                    />
                  </div>
                  <div className="col-sm-7" id="ejrc-cuadrado"></div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between a-b mt-4">
              <button className="btn btn-info t" onClick={calcularArea}>Calcular área</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuadrado;
