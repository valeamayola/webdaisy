import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function Report () {
    const navigate = useNavigate ();
    return (
        <div>
            <span className='font-bold text-xl'>Reportar incidente</span>
            <div className='card w-90 mt-3 rounded-xl bg-neutral-200 shadow-xl'>
                <div className='card-body'>
                <div className="card-actions justify-end absolute right-0 -top-3">
                    <button className="btn btn-square rounded-xl border-transparent bg-neutral-400 btn-sm" onClick={() => navigate('/home')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        </div>
                <select className="select select-bordered w-full max-w-xs text-base">
                    <option value="predeterminado" disabled>Seleccione el incidente</option>
                    <option value="opcion-1">Calle rota</option>
                    <option value="opcion-2">Semáforo dañado</option>
                    <option value="opcion-3">Etc</option>
                </select>
                <button className='btn mt-6'>Adjuntar imágen</button>
                <input type="text" placeholder="Añadir descripción" className="input input-bordered w-full max-w-xs" />
                <button className='btn btn-wide mx-auto mt-10'>Reportar incidente</button>
                </div>
            </div>
        </div>
    )
}