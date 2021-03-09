import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { REACT_APP_API_USERS } from "../../envLocal";

function authentication(ev) {
  ev.preventDefault();
  const form = ev.target;

  const data = {
    email: form.email.value,
    password: form.password.value,
  };

  axios
    .post(`${REACT_APP_API_USERS}`, data)
    .then(resp => {
      localStorage.setItem("email", resp.data.email);
      window.location = "/";
    })
    .catch(error => console.log(error));
}

const Login = () => (
  <div className="ed-grid">
    <div className="l-block">
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesión</h1>
        <form onSubmit={authentication.bind()}>
          <div className="form-item">
            <label htmlFor="email">
              Correo electronico:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
              />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="password">
              Contraseña:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="ingrese su contraseña:"
                required
              />
            </label>
          </div>
          <div className="form-item">
            <input
              type="submit"
              className="button full"
              value="Iniciae sesión"
            />
          </div>
        </form>
        <div className="center">
          <p>
            ¿No tienes cuenta de usuario?
            <Link to="/registro">Crear Cuneta</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
