import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function MyMarkers () {
    const navigate = useNavigate ();
    return (
        <div>
            <div className='absolute top-5 left-0 ml-5'>
            <div className='btn btn-square rounded-xl' onClick={() => navigate('/profile')}>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
            </div>
            </div>
            <span className='mb-5 font-medium text-xl '>MIS REPORTES</span>
            <div className='flex flex-col'>
            <div className='p-4 bg-neutral-200 mt-5 mb-2 rounded-xl w-60 text-start'>
                <div className='flex flex-col'>
                <span className='ml-2 font-normal text-base'>Reporte #123</span>
                <span className='ml-2 font-bold text-sm text-gray-700' onClick={() => navigate('/statusmarker')}>Ver estado</span>
                </div>
            </div>
            <div className='p-4 bg-neutral-200 mt-5 mb-2 rounded-xl w-60 text-start'>
                <div className='flex flex-col'>
                <span className='ml-2 font-normal text-base'>Reporte #123</span>
                <span className='ml-2 font-bold text-sm text-gray-700'>Ver estado</span>
                </div>
            </div>
            <div className='p-4 bg-neutral-200 mt-5 mb-2 rounded-xl w-60 text-start'>
                <div className='flex flex-col'>
                <span className='ml-2 font-normal text-base'>Reporte #123</span>
                <span className='ml-2 font-bold text-sm text-gray-700'>Ver estado</span>
                </div>
            </div>
            <div className='p-4 bg-neutral-200 mt-5 rounded-xl w-60 text-start'>
                <div className='flex flex-col'>
                <span className='ml-2 font-normal text-base'>Reporte #123</span>
                <span className='ml-2 font-bold text-sm text-gray-700'>Ver estado</span>
                </div>
            </div>
        </div>
        </div>
    )
}