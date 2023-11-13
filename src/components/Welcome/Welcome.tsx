import { IconSvg } from '../../img/icons/icon.svg.tsx';
import { useNavigate } from "react-router-dom";


export function Welcome () {
    const navigate = useNavigate();

    return (
        <div className="hero h-screen bg-gradient-to-b from-sky-100 via-sky-300 to-blue-800 w-screen backdrop-filter: blur(64px)">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h3 className="text-5xl font-bold">BIENVENIDO A<br />TU VOZ SUMA</h3>
                <IconSvg></IconSvg>
                <button className="btn border-black bg-gradient-to-r from-green-400 to-blue-500 mt-5 w-1/2" onClick={() => navigate('/login')}>Continuar</button>
                </div>
                </div>
                </div>
                );
            }

