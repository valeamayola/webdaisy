import '../../App.css';

export function InfoProfile () {
    return (
        <div className='relative top-6 flex flex-col'>
        <span className='font-bold text-2xl mb-1'>Juan Perez</span>
        <span className='font-medium text-md'>jperez@gmail.com</span>
        <span className='font-semibold text-lg'>Buenos Aires, Argentina.</span>
        </div>
    )
}