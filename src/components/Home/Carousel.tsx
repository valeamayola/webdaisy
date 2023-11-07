import '../../App.css';
import { LeftSvg } from '../../img/icons/left.svg.tsx';
import { RightSvg } from '../../img/icons/right.svg.tsx';
import { useState } from 'react';


const images = [
  '../src/img/svg1.svg',
  '../src/img/svg2.svg',
  '../src/img/svg3.svg',
];

export function Carousel () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState(images);

  const handlePreviousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div id="controls-carousel" className="relative carousel carousel-center justify-center w-full max-w-md p-4 space-x-4 bg-gradient-to-r from-sky-600 from-10% via-sky-600 via-30% to-sky-400 to-90% rounded-box shadow-2xl w-2/3 mt-2">
      {slides.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className={`carousel-item relative w-full ${currentSlide === index ? 'block' : 'hidden'}`}
        >
          <img src={image} className="max-h-80 object-fit:contain" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href={`#slide${index}`} onClick={handlePreviousSlide} className='top-5'>
              <LeftSvg />
            </a>
            <a href={`#slide${index + 2}`} onClick={handleNextSlide}>
              <RightSvg />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
