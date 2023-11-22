import '../../App.css';
import { useNavigate } from 'react-router-dom';

export function StatusMarker () {
    const navigate = useNavigate ();
    return (
        <div>
            <div className='absolute top-5 left-0 ml-5'>
            <div className='btn btn-square rounded-xl' onClick={() => navigate('/profile')}>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
            </div>
            </div>
            <div className='p-3 absolute top-0 left-24 bg-neutral-300 mt-5 mb-2 rounded-xl w-52'>
                <div className='flex flex-col'>
                <span className='ml-2 font-medium text-base'>Reporte #123</span>
                </div>
            </div>
            <div className='flex flex-col items-center'>
            <div className='p-3 bg-neutral-200 mt-5 mb-5 rounded-xl w-72'>
                <div className='flex flex-col'>
                <span className='ml-2 font-normal text-base'>Semáforo dañado</span>
                <span className='ml-2 font-light text-sm'>Calle 120, La Matanza</span>
                </div>
            </div>
            <div className='p-20 bg-neutral-200 mb-5 rounded-xl w-72'>
                <span className='ml-2 font-normal text-base'>Imágen</span>
            </div>
            </div>
            <ul className="timeline timeline-vertical lg:timeline-horizontal mr-40">
                <li>
                    <div className="timeline-start text-sm">20/11/2023<br></br>17:03</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(34 139 34)" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box w-60">Resuelto</div>
                    <hr className='bg-lime-600'/>
                    </li>
                    <li>
                        <hr className='bg-lime-600'/>
                        <div className="timeline-start text-sm">19/11/2023<br></br>14:50</div>
                        <div className="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(255 192 5)" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box w-60">Pendiente</div>
                        <hr className='bg-amber-400'/>
                        </li>
                        <li>
                            <hr className='bg-amber-400'/>
                        <div className="timeline-start text-sm">19/11/2023<br></br>13:47</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(0 128 255)" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box w-60">Enviado</div>
                    </li>
                </ul>
        </div>
    )
}