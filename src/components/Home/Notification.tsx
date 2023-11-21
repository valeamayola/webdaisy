import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function Notification () {
    const navigate = useNavigate ();
    return (
        <div className='card w-60 bg-base-100 shadow-xl'>
            <div className='card-body'>
            <div className="card-actions justify-end absolute -right-2 top-4">
                <button className="btn btn-square btn-sm rounded-xl" onClick={() => navigate ('/home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <h2 className='card-title'>Notificaciones</h2>
            <span>No tienes notificaciones</span>
            </div>
        </div>
    )
}