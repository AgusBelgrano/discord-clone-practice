import { useAppSelector } from "../../app/hooks";

const MyAccount = () => {
  
  const user = useAppSelector((state) => state.auth.user);
  console.log(user?.avatar)

  return (
    <div id="content">
      <h2>My Account</h2>
      <div className="account-card">
        <div className="banner"></div>
        <form>
          <img id="avatar" src={user?.avatar} />
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
          <input type="submit" value="Guardar cambios" />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
