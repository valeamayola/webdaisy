import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function Debates () {
    const navigate = useNavigate ();
    return (
        <div>
            <div className='absolute top-5 left-0 ml-5'>
            <div className='btn btn-square rounded-xl' onClick={() => navigate('/home')}>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
            </div>
            </div>
        <h2 className='font-medium text-2xl mb-5'>DEBATES</h2>
        <div className='flex flex-row w-80 mb-5 items-center bg-neutral-200 p-2 rounded-2xl'>
            <div className="avatar placeholder ml-2">
                 <div className="bg-neutral text-neutral-content rounded-full w-12">
                    <span>MT</span>
                </div> 
            </div>
            <div className='flex flex-col'>
            <span className='ml-5 text-base font-medium'>La Matanza</span>
            <span className='ml-5 text-sm font-normal'>12 miembros</span>
            </div>
        </div>
        <div className='flex flex-row w-80 mb-5 items-center bg-neutral-200 p-2 rounded-2xl'>
            <div className="avatar placeholder ml-2">
                 <div className="bg-neutral text-neutral-content rounded-full w-12">
                    <span>MT</span>
                </div> 
            </div>
            <div className='flex flex-col'>
            <span className='ml-5 text-base font-medium'>La Matanza</span>
            <span className='ml-5 text-sm font-normal'>12 miembros</span>
            </div>
        </div>
        <div className='flex flex-row w-80 mb-5 items-center bg-neutral-200 p-2 rounded-2xl'>
            <div className="avatar placeholder ml-2">
                 <div className="bg-neutral text-neutral-content rounded-full w-12">
                    <span>MT</span>
                </div> 
            </div>
            <div className='flex flex-col'>
            <span className='ml-5 text-base font-medium'>La Matanza</span>
            <span className='ml-5 text-sm font-normal'>12 miembros</span>
            </div>
        </div>
        <div className='flex flex-row w-80 mb-5 items-center bg-neutral-200 p-2 rounded-2xl'>
            <div className="avatar placeholder ml-2">
                 <div className="bg-neutral text-neutral-content rounded-full w-12">
                    <span>MT</span>
                </div> 
            </div>
            <div className='flex flex-col'>
            <span className='ml-5 text-base font-medium'>La Matanza</span>
            <span className='ml-5 text-sm font-normal'>12 miembros</span>
            </div>
        </div>
        <button className='btn mt-2 rounded-xl'>Ver más</button>
        </div>
    )
}