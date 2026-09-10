import { useState } from "react";

function EventCard({ nombre, categoria, fecha, modalidad, lugar, descripcion }) {
  const [inscrito, setInscrito] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  function manejarInscripcion() {
    setInscrito(!inscrito);
  }

  function manejarDetalles() {
    setMostrarDetalles(!mostrarDetalles);
  }

  return (
    <article className="event-card">
      <h3>{nombre}</h3>
      <p>
        <strong>Categoría:</strong> {categoria}
      </p>
      <p>
        <strong>Fecha:</strong> {fecha}
      </p>

      {mostrarDetalles && (
        <>
          <p>
            <strong>Modalidad:</strong> {modalidad}
          </p>
          <p>
            <strong>Lugar:</strong> {lugar}
          </p>
          <p>{descripcion}</p>
        </>
      )}

      <div className="event-card-buttons">
        <button onClick={manejarDetalles}>
          {mostrarDetalles ? "Ocultar detalles" : "Ver detalles"}
        </button>
        <button onClick={manejarInscripcion}>
          {inscrito ? "Cancelar inscripción" : "Inscribirme"}
        </button>
      </div>
    </article>
  );
}

export default EventCard;
