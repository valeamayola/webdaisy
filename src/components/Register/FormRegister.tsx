import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

type FormProps = {
    onSubmit: (values: { user: string; email: string; password: string; confirmpassword: string;}) => void;
  };

  const FormRegister: React.FC<FormProps> = ({ onSubmit }) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const navigate = useNavigate ();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({ user, email, password, confirmpassword });

    };
  
    return (
      <div className="card rounded-3xl flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex justify-center align-center h-fit mt-12">
        <form className="card-body" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mt-3">Registrarse</h1>
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
              type="text"
              className="input input-bordered"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          </div>
          <div className="form-control">
            <label className="label">
            </label>
            <input
              type="password"
              className="input input-bordered"
              placeholder="Confirmar contraseña"
              required
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-secondary mt-8 mb-7 rounded-box text-white uppercase text-base" onClick={() => navigate('/home')}>Siguiente</button>
          </div>
        </form>
      </div>
    );
  };


export default FormRegister;