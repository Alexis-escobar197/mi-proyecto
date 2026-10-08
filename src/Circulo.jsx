import { useState } from "react";

function Circulo() {
  const [radio, setRadio] = useState("");
  const [area, setArea] = useState("");

  const calcularArea = () => {
    if (radio) {
      setArea(Math.PI * radio * radio);
    }
  };

  return (
    <div className="container alinear mt-5">
      <div className="row">
        <div className="col-sm-8">
          <h3>Área del círculo</h3>
          <p>
            Un círculo es una figura geométrica plana formada por todos los
            puntos que están a una distancia fija (radio) de un punto central.
            La fórmula para calcular su área es:
          </p>
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <p className="fw-bold">Fórmula:</p>
            <div className="row text-center">
              <p>Área = π × Radio² = π × r²</p>
            </div>
            <div className="row d-flex justify-content-center">
              <img
                className="representacion-a"
                src="${import.meta.env.BASE_URL}images/area-circulo.png"
                alt="Representación del área de un círculo"
              />
            </div>
            <p className="fw-bold">Donde:</p>
            <p>
              π es una constante matemática ≈ 3.1416 y el radio es la distancia
              desde el centro del círculo hasta cualquier punto de su
              circunferencia.
            </p>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <h5>Ejemplo</h5>
            <div className="row d-flex justify-content-center">
              <img
                src="${import.meta.env.BASE_URL}images/ejemplo-circulo.png"
                alt="Ejemplo del área de un círculo"
                className="representacion-ejmp"
              />
            </div>
            <div className="row">
              <p>
                <span className="fw-bold">Área</span> = π × (2cm)² ≈ 12.566cm²
              </p>
              <p>
                <span className="fw-bold">Resultado:</span> El área del círculo
                de radio 2cm es ≈ 12.566cm²
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
                    <label>Radio:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={radio}
                      onChange={(e) => setRadio(e.target.value)}
                      placeholder="Ingrese la longitud del radio"
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
                  <span className="fw-bold">Fórmula:</span> Área = π × r²
                </p>
                <div className="row">
                  <div className="col-sm-5 d-flex justify-content-left">
                    <img
                      src="${import.meta.env.BASE_URL}images/area-circulo.png"
                      alt="Imagen de un círculo"
                      className="representacion-ejrc"
                    />
                  </div>
                  <div className="col-sm-7" id="ejrc-circulo"></div>
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

export default Circulo;
