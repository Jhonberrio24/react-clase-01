import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Usuarios from "./components/Usuarios"; 
import Footer from "./components/Footer";
import heroImg from "./assets/hero.png";

function App() {
  return (
    <div 
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh"
      }}
    >
      {/* Navbar estilizado directamente */}
      <nav className="navbar navbar-dark bg-dark px-4 py-3 shadow d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-bold fs-4 text-white">
          MARKETING DIGITAL PRO
        </span>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm">Inicio</button>
          <button className="btn btn-outline-light btn-sm">Nosotros</button>
          <button className="btn btn-outline-light btn-sm">Contacto</button>
          <button className="btn btn-primary btn-sm fw-bold">Patrocina Betplay</button>
        </div>
      </nav>

      {/* Hero / Encabezado de bienvenida estilizado */}
      <div className="text-center text-white py-5 my-2">
        <h1 className="display-4 fw-bold mb-3">
          Agencia de Marketing Digital
        </h1>
        <p className="lead fs-4 text-light mb-4">
          Impulsamos tu marca con estrategias efectivas de React, SEO y Redes Sociales.
        </p>
        <button className="btn btn-primary btn-lg rounded-pill px-5 shadow fw-semibold">
          Comenzar
        </button>
      </div>

      {/* Sección de Tarjetas */}
      <div className="container py-4">
        <h2 className="text-center text-white mb-4 fw-bold">Nuestros Servicios</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card 
              nombre="SEO y Posicionamiento" 
              descripcion="Optimiza tu sitio web para aparecer en los primeros resultados de Google." 
              informacion="Aprende palabras clave, optimización técnica y link building." 
              boton="Explorar SEO" 
              imagenFondo="https://picsum.photos/id/119/600/400" 
            />
          </div>
          <div className="col-md-4 mb-4">
            <Card 
              nombre="Social Media Ads" 
              descripcion="Crea campañas publicitarias efectivas en Instagram, Facebook y TikTok." 
              informacion="Segmentación de audiencia, presupuestos y análisis de métricas (ROAS)." 
              boton="Ver Campañas" 
              imagenFondo="https://picsum.photos/id/366/600/400" 
            />
          </div>
          <div className="col-md-4 mb-4">
            <Card 
              nombre="Email Marketing" 
              descripcion="Fideliza a tus clientes con secuencias de correos automatizados." 
              informacion="Diseño de newsletters, embudos de conversión y tasas de apertura." 
              boton="Saber Más" 
              imagenFondo="https://picsum.photos/id/0/600/400" 
            />
          </div>
        </div>
      </div>

      <Usuarios />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;