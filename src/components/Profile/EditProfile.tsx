import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function EditProfile () {
    const navigate = useNavigate ();
    return (
        <div>
            <div className='absolute top-5 left-0 ml-5'>
            <div className='btn btn-square rounded-xl' onClick={() => navigate('/profile')}>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
            </div>
        </div>
        <div className='flex flex-col items-center align-center justify-center mx-auto'>
            <div className='avatar'>
            <div className='w-32 rounded-full bg-base-200'>
              <svg className='w-14 m-auto mt-7'
              fill='rgb(163 163 163)'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            </div>
            <button className='btn bg-neutral-400 mt-5 rounded-3xl absolute mt-20 ml-20'>
            <svg className='w-4 h-4' fill='rgb(80 80 80)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
            </button>
        </div>
        <div className='flex flex-col mt-10 text-start'>
                <span className='font-medium text-base ml-2'>Nombre y apellido</span>
                <input type="text" placeholder='Juan Perez' className="input bg-neutral-200 rounded-xl w-80 max-w-xs" />
        </div>
        <div className='flex flex-col mt-2 text-start'>
                <span className='font-medium text-base ml-2'>Correo</span>
                <input type="text" placeholder='jperez@gmail.com' className="input bg-neutral-200 rounded-xl w-80 max-w-xs" />
        </div>
        <div className='flex flex-col mt-2 text-start'>
                <span className='font-medium text-base ml-2'>Localidad</span>
                <input type="text" placeholder='Buenos Aires' className="input bg-neutral-200 rounded-xl w-80 max-w-xs" />
        </div>
        <div className='flex flex-col mt-2 text-start'>
                <span className='font-medium text-base ml-2'>Municipio</span>
                <input type="text" placeholder='Buenos Aires' className="input bg-neutral-200 rounded-xl w-80 max-w-xs" />
        </div>
            <button className='btn btn-wide mt-8 rounded-xl'>Guardar cambios</button>
        </div>
    )
}