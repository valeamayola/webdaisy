import { IconSvg } from '../../img/icons/icon.svg.tsx';
import { useNavigate } from "react-router-dom";


export function Welcome () {
    const navigate = useNavigate();

    return (
        <div className="hero h-screen bg-gradient-to-b from-sky-100 via-sky-300 to-blue-800 w-screen backdrop-filter: blur(64px)">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h2 className="text-4xl font-black">BIENVENIDO A<br />TU VOZ SUMA</h2>
                <IconSvg></IconSvg>
                <button className="btn border-blue-500 bg-gradient-to-r from-green-400 to-blue-500 mt-5 w-1/2" onClick={() => navigate('/login')}>Continuar</button>
                </div>
                </div>
                </div>
                );
            }

