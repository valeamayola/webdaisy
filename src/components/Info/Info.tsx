import '../../App.css';

export function Info () {
    return (
        <div className='flex flex-col'>
            <span className='mb-5 font-medium text-xl'>INFORMACIÓN</span>
            <button className='btn btn-wide mb-5'>Ranking de municipios</button>
            <button className='btn btn-wide mb-5'>Contacto de municipios</button>
            <button className='btn btn-wide'>Guía de usuario</button>
        </div>
    )
}