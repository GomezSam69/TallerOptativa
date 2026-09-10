import { useState } from "react";

function RegistrationForm({ eventos }) {
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="inscripcion" className="registration-section">
      <h2>Formulario de inscripción</h2>
      <form onSubmit={manejarEnvio}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" id="correo" name="correo" required />
        </div>

        <div className="form-group">
          <label htmlFor="evento">Evento</label>
          <select id="evento" name="evento" required defaultValue="">
            <option value="" disabled>
              Seleccione un evento
            </option>
            {eventos.map((evento) => (
              <option key={evento.id} value={evento.nombre}>
                {evento.nombre}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Enviar inscripción</button>
      </form>

      {enviado && <p className="mensaje-confirmacion">¡Inscripción enviada!</p>}
    </section>
  );
}

export default RegistrationForm;
