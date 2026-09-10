import Header from "./components/Header";
import EventCard from "./components/EventCard";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import eventos from "./data/eventos";
import "./App.css";

function App() {
  return (
    <div className="app" id="inicio">
      <Header />

      <main>
        <section id="eventos" className="events-section">
          <h2>Próximos eventos</h2>
          <div className="events-list">
            {eventos.map((evento) => (
              <EventCard
                key={evento.id}
                nombre={evento.nombre}
                categoria={evento.categoria}
                fecha={evento.fecha}
                modalidad={evento.modalidad}
                lugar={evento.lugar}
                descripcion={evento.descripcion}
              />
            ))}
          </div>
        </section>

        <RegistrationForm eventos={eventos} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
