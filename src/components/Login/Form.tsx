import React, { useState } from "react";

type FormProps = {
    onSubmit: (values: { user: string; password: string }) => void;
  };

  const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({ user, password });
    };
  
    return (
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mt-3">Iniciar sesión</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Usuario</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contraseña</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                ¿Olvidaste tu contraseña? Recuperala aquí
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-secondary mb-7 rounded-box text-white uppercase">Entrar</button>
            <button  className="btn btn-primary mb-3 rounded-box text-white uppercase">Registrarse</button>
            <button  className="btn btn-primary rounded-box text-white uppercase">
                <div className="font-black text-md">
                Acceder <br />
                como invitado
                </div>
                </button>
          </div>
        </form>
      </div>
    );
  };


export default Form;