import '../../App.css';

export function PhotoProfile () {
    return (
        <div className='relative'>
            <div className='avatar -top-2'>
            <div className='w-28 rounded-full bg-base-200'>
              <svg className='w-14 m-auto mt-5'
              fill='rgb(163 163 163)'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            </div>
        </div>
    )
}