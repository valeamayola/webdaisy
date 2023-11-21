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
                <div className='flex flex-row'>
                <span className='mt-1 font-medium ml-2'>Ubique el lugar del incidente</span>
                <button className='btn btn-square rounded-xl btn-sm ml-8 bg-neutral-300'>
                        <svg className='h-4 w-4' fill='rgb(100 100 100)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                </button>
                </div>
                <button className='btn btn-wide mx-auto mt-10'>Reportar incidente</button>
                </div>
            </div>
        </div>
    )
}