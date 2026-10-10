function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow">
      <div className="container-fluid">
        {/* Título de la aplicación */}
        <a className="navbar-brand fw-bold text-uppercase" href="#">
          Marketing Digital Pro
        </a>

        {/* Menú horizontal de botones */}
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm">Inicio</button>
          <button className="btn btn-outline-light btn-sm">Nosotros</button>
          <button className="btn btn-outline-light btn-sm">Contacto</button>
          <button className="btn btn-primary btn-sm fw-bold">Patrocina Betplay</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;