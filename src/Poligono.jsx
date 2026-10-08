import { useState } from "react";

function Poligono() {
  const [lado, setLado] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [apotema, setApotema] = useState("");
  const [area, setArea] = useState("");

  const calcularArea = () => {
    if (lado && cantidad && apotema) {
      const perimetro = lado * cantidad;
      setArea((perimetro * apotema) / 2);
    }
  };

  return (
    <div className="container alinear mt-5">
      <div className="row">
        <div className="col-sm-8">
          <h3>Área de polígonos regulares</h3>
          <p>
            Un polígono regular es aquel que tiene todos sus lados y sus ángulos
            congruentes. La fórmula general para calcular su área es:
          </p>
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <p className="fw-bold">Fórmula:</p>
            <div className="row text-center">
              <p>Área = (Perímetro × Apotema) / 2 = (p × a) / 2</p>
            </div>
            <div className="row d-flex justify-content-center">
              <img
                className="representacion-a"
                src="/mi-proyecto/images/area-poligono.png"
                alt="Representación del área de un polígono regular"
              />
            </div>
            <p className="fw-bold">Donde:</p>
            <p>
              El perímetro es igual al producto de la longitud del lado por la
              cantidad de lados, y el apotema es el segmento que une el centro
              del polígono con el punto medio de un lado.
            </p>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="container rounded-2 cl-2 mt-3 mb-3 pt-2 pb-2">
            <h5>Ejemplo</h5>
            <div className="row d-flex justify-content-center">
              <img
                src="/mi-proyecto/images/ejemplo-poligono.png"
                alt="Ejemplo del área de un polígono regular"
                className="representacion-ejmp"
              />
            </div>
            <div className="row">
              <p>
                <span className="fw-bold">Área</span> = ((2cm × 5) × 1.38cm) / 2
                ≈ 6.88cm²
              </p>
              <p>
                <span className="fw-bold">Resultado:</span> El área del polígono
                regular es 6.88cm²
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
                    <label>Lado:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={lado}
                      onChange={(e) => setLado(e.target.value)}
                      placeholder="Ingrese la longitud del lado"
                    />
                  </div>
                  <div className="form-group mt-2 mb-3">
                    <label>Cantidad de lados:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={cantidad}
                      onChange={(e) => setCantidad(e.target.value)}
                      placeholder="Ingrese la cantidad de lados"
                    />
                  </div>
                  <div className="form-group mt-2 mb-3">
                    <label>Apotema:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={apotema}
                      onChange={(e) => setApotema(e.target.value)}
                      placeholder="Ingrese la apotema"
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
                  <span className="fw-bold">Fórmula:</span> Área = (p × a) / 2
                </p>
                <div className="row">
                  <div className="col-sm-5 d-flex justify-content-left">
                    <img
                      src="/mi-proyecto/images/area-poligono.png"
                      alt="Imagen de un polígono regular"
                      className="representacion-ejrc"
                    />
                  </div>
                  <div className="col-sm-7" id="ejrc-poligono"></div>
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

export default Poligono;
