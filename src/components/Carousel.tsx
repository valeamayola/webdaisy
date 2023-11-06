import '../App.css';
import { LeftSvg } from '../img/icons/left.svg.tsx';
import { RightSvg } from '../img/icons/right.svg.tsx';


const images = [
  '../src/img/svg1.svg',
  '../src/img/svg2.svg',
  '../src/img/svg3.svg',
];

export default function Carousel () {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-gradient-to-r from-sky-600 from-10% via-sky-600 via-30% to-sky-400 to-90% rounded-box shadow-2xl w-2/3 mt-2">
      {images.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img src={image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href={`#slide${index}`} className='top-5'>
              <LeftSvg />
            </a>
            <a href={`#slide${index + 2}`}>
              <RightSvg />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};