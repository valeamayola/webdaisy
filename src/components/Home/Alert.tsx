import '../../App.css';

export function Alert () {
    return (
        <div className='justify-center items-center align-center'>
        <div className="alert alert-info mx-auto m-auto items-center -mt-20 bg-primary rounded-xl w-8/12 text-neutral">
            <span>Marca el ícono y ubicalo en el mapa.</span>
        </div>
        <div className="alert mx-auto bg-black mt-2 bg-secondary rounded-xl w-full">
                <span className='text-gray-50'>Tu Voz Suma te ayuda a reportarlo.</span>
        </div>
        </div>
    )
};