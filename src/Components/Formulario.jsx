function Formulario() {
  return (
    <form>
      <h2>Registro</h2>

      <div>
        <label>Nombre:</label>
        <input type="text" placeholder="Ingresa tu nombre" />
      </div>

      <div>
        <label>Correo electrónico:</label>
        <input type="email" placeholder="Ingresa tu correo" />
      </div>

      <div>
        <label>Contraseña:</label>
        <input type="password" placeholder="Ingresa tu contraseña" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;