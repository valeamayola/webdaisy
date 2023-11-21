import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function Markers () {
    const navigate = useNavigate ();
    return (
        <div>
            <div className='absolute top-5 left-0 ml-5'>
            <div className='btn btn-square rounded-xl' onClick={() => navigate('/home')}>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
            </div>
            </div>
            <span className='text-xl font-medium'>INFORMACIÓN DEL REPORTE</span>
            <div className='bg-neutral-200 p-2 rounded-xl mt-2'>
                <span>N° de incidencia:</span>
            </div>
            <div className='flex flex-start bg-neutral-200 p-2 rounded-xl mt-2'>
                <span className='ml-2'>Fecha de reporte:</span>
            </div>
            <div className='flex flex-row mx-auto align-center items-center bg-neutral-200 p-4 rounded-xl mt-2'>
            <svg className='h-5 w-5 ml-2' fill='rgb(120 120 120)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <span className='ml-2'>Lamadrid 120, La Matanza</span>
            </div>
            <div className='flex flex-start bg-neutral-200 p-2 rounded-xl mt-2'>
                <span className='ml-2'>Tipo de incidencia:</span>
            </div>
            <div className='flex flex-start mb-10 bg-neutral-200 p-2 rounded-xl mt-2'>
                <span className='ml-2'>Reportado por: @user</span>
            </div>
            <div className='flex flex-col'>
            <button className='btn rounded-xl text-red-900 bg-red-200'>Denunciar reporte</button>
            <button className='btn rounded-xl mt-3 text-green-900 bg-green-300'>Marcar como resuelto</button>
            </div>
        </div>
    )
}