import '../../App.css';

export function OptionsProfile () {
    return (
        <div className='relative top-8 flex flex-col mb-10'>
        <button className="btn btn-wide mb-5">
            Información personal
        </button>
        <button className="btn btn-wide mb-5 ">
            Configuración
            </button>
        <button className="btn btn-wide mb-10">
            Acerca de
            </button>
        </div>
    )
}