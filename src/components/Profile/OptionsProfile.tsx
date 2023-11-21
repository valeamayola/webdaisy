import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function OptionsProfile () {
    const navigate = useNavigate ();
    return (
        <div className='relative top-8 flex flex-col mb-10'>
        <button className="btn btn-wide mb-5" onClick={() => navigate('/mymarkers')}>
            Mis marcadores
        </button>
        <button className="btn btn-wide mb-5" onClick={() => navigate('/config')}>
            Configuración
            </button>
        <button className="btn btn-wide mb-8"onClick={() => navigate('/about')}>
            Acerca de
            </button>
        </div>
    )
}