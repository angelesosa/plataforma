import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const authentication = e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    email: form.email.value,
    password: form.password.value
  };

  Axios.post(`${process.env.REACT_APP_API_USER}/login`, data)
    .then(resp => {
      localStorage.setItem("token", resp.data.token);
      window.location = "/";
    })
    .catch(e => {
      console.log(e);
      alert('Error al inciar sesion');
    });
};

const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-40 lg-30">
        <h1 className="center">Iniciar Sesion</h1>
        <form onSubmit={authentication.bind()}>
          <div className="form__item">
            <label htmlFor="email">
              Correo electronico
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese su email"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                name="passsword"
                id="password"
                placeholder="Ingrese su contraseña"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <input
              type="submit"
              className="button full"
              value="Iniciar Session"
            />
          </div>
        </form>
        <div className="center">
          <p>
            No tienes cuenta de usuario?{" "}
            <Link to="/registro">Crear cuenta</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
