import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

type FormProps = {
    onSubmit: (values: { user: string; password: string }) => void;
  };

  const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate ();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({ user, password });


    };
  
    return (
      <div className="card rounded-3xl flex-shrink-0 w-11/12 max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mt-3">Iniciar sesión</h1>
          <div className="form-control">
            <label className="label">
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Usuario"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
            </label>
            <input
              type="password"
              className="input input-bordered"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a href="#" className="text-base text-sm label-text-alt link link-hover">
                ¿Olvidaste tu contraseña? Recuperala aquí
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-secondary text-base mb-7 rounded-box text-white uppercase" onClick={() => navigate('/home')}>Entrar</button>
            <button  className="btn btn-primary text-base mb-3 rounded-box text-white uppercase" onClick={() => navigate('/register')}>Registrarse</button>
            <button  className="btn btn-primary  h-fit text-base rounded-box text-white uppercase">
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