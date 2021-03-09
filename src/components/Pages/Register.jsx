import React from "react";
import axios from "axios";
import { REACT_APP_API_USERS } from "../../envLocal";
import { Link } from "react-router-dom";

function registration(ev) {
  ev.preventDefault();
  const form = ev.target;

  const data = {
    email: form.email.value,
    name: form.fullName.value,
    passwor: form.password.value,
  };

  axios.post(`${REACT_APP_API_USERS}`, data).then(resp => {
    localStorage.setItem("email", resp.data.email);
  });
}

const Register = () => (
  <div className="ed-grid">
    <div className="l-block">
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Crear Cuenta</h1>
        <form onSubmit={registration.bind()}>
          <div className="form-item">
            <label htmlFor="fullName">
              Nombre Completo:
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Ingresa tu nombre"
                required
              />
            </label>
          </div>
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
            ¿Ya tienes una cueta ?<Link to="/login">Iniciar sesión</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
