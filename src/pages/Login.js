import React from 'react';
import './Auth.css';  

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Ingrese su email" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Ingrese su contraseña" />
          </div>
          <button type="submit" className="auth-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
