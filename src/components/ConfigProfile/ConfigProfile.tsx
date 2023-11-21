import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function ConfigProfile () {
    const navigate = useNavigate ();
    const [checked, setChecked] = useState(true);
    return (
        <div>
            <div className='absolute top-5 left-0 ml-5'>
            <div className='btn btn-square rounded-xl' onClick={() => navigate('/profile')}>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
            </div>
        </div>
        <div className='flex flex-col'>
            <span className='mb-5 font-medium text-xl'>CONFIGURACIÓN</span>
            <div className='form-control p-4 mt-2 mb-5 bg-neutral-200 rounded-xl'>
                <label className='label cursor-pointer'>
                <span className='mr-10 label-text font-normal text-base'>Activar notificaciones</span>
                <input type="checkbox" checked={checked} onChange={(event) => {setChecked(event.target.checked);}} className="toggle rounded-3xl"/>
                </label>
            </div>
            <div className='p-4 mt-0 mb-5 bg-neutral-200 rounded-xl'>
                <span className='mr-10 label-text font-normal text-base'>Cambiar contraseña</span>
                <button className="btn btn-sm ml-6 bg-transparent border-transparent" onClick={() => navigate('')}>
                    <svg className='w-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                </button>
            </div>
        </div>
        </div> 
    )
}