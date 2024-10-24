import React from 'react';
import './Auth.css';  

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Registro</h2>
        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Ingrese su nombre" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Ingrese su email" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Ingrese su contraseña" />
          </div>
          <button type="submit" className="auth-button">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

