import { useState } from "react";

function Card({ nombre, descripcion, informacion, boton, imagenFondo }) {
  const [mostrarInformacion, setMostrarInformacion] = useState(false);

  function mostrarMensaje() {
    setMostrarInformacion(!mostrarInformacion);
  }

  return (
    <div className="container my-3" style={{ maxWidth: "400px" }}>
      <div 
        className="card shadow-lg rounded-4 overflow-hidden border-0 text-white" 
        style={{ 
          // Usa la imagen específica que le pasemos a cada tarjeta
          backgroundImage: `url(${imagenFondo})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          minHeight: "350px",
          boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.45)" // Capa oscura para leer bien el texto
        }}
      >
        
        <div className="card-body d-flex flex-column justify-content-between p-4" style={{ zIndex: 1 }}>
          
          <div>
            <h3 className="card-title h4 fw-bold mb-2">{nombre}</h3>
            <p className="card-text small mb-4">{descripcion}</p>
          </div>

          <button 
            onClick={mostrarMensaje}
            className="btn btn-light w-100 rounded-pill py-2 fw-semibold"
          >
            {boton}
          </button>

          {mostrarInformacion && (
            <div className="alert alert-light border-0 rounded-3 mt-3 p-3 text-muted" style={{ fontSize: "0.85rem" }}>
              <p className="mb-0">{informacion}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Card;