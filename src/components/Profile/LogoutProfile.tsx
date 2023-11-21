import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function LogoutProfile () {
    const navigate = useNavigate ();
    return (
        <div className='relative'>
            <button className='btn btn-wide text-red-500' onClick={() => navigate('/login')}>
                Cerrar sesión
            </button>
        </div>
    )
}