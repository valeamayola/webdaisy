import { IconSvg } from '../../img/icons/icon.svg.tsx';
import { useNavigate } from "react-router-dom";


export function Welcome () {
    const navigate = useNavigate();

    return (
        <div className="hero h-screen bg-gradient-to-r from-cyan-500 to-blue-500 w-screen backdrop-filter: blur(64px)">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h3 className="text-5xl font-bold">BIENVENIDO A<br />TU VOZ SUMA</h3>
                <IconSvg></IconSvg>
                <button className="btn btn-white mt-5 w-1/2" onClick={() => navigate('/login')}>Continuar</button>
                </div>
                </div>
                </div>
                );
            }

