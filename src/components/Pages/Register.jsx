import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

const registro = e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.fullname.value,
    email: form.email.value,
    password: form.password.value,
  }

  Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
    .then(resp => {
      window.location = '/';
    }).catch(e => console.log(e));
}

const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-40 lg-30">
        <h1 className="center">Crear cuenta</h1>
        <form onSubmit={registro.bind()}>
          <div className="form__item">
            <label htmlFor="email">
              Nombre Completo
              <input type="text" name="fullname" id="fullname" placeholder="Ingrese su nombre completo" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Correo electronico
              <input type="email" name="email" id="email" placeholder="Ingrese su email" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input type="password" name="passsword" id="password" placeholder="Ingrese su contraseña" required />
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Registrarme" />
          </div>
        </form>
        <div className="center">
          <p>ya tienes cuenta de usuario? <Link to='/login'>Iniciar sesion</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
