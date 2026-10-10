function Hero() {
  return (
    <div className="text-center text-white py-5 my-3">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">
          Bienvenidos a nuestra aplicación
        </h1>
        <p className="lead fs-4 text-light mb-4">
          Una interfaz que utiliza React y Bootstrap de forma moderna.
        </p>
        <button className="btn btn-primary btn-lg rounded-pill px-5 shadow fw-semibold">
          Comenzar
        </button>
      </div>
    </div>
  );
}

export default Hero;