import './MyAccount.css';

const ConfigContent = () => {
  return (
    <div id="content">
      <h2>My Account</h2>
      <form>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          value="tu nombre de usuario"
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value="tu correo electrónico"
        />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
        <input type="submit" value="Guardar cambios" />
      </form>
    </div>
  );
};

export default ConfigContent;
