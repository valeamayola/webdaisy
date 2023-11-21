import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function LogoutProfile () {
    const navigate = useNavigate ();
    return (
        <div className='relative -bottom-5'>
            <button className='btn btn-wide text-red' onClick={() => navigate('/login')}>
                Cerrar sesión
            </button>
        </div>
    )
}