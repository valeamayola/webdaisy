import { useNavigate } from "react-router-dom";
import { titlesAndDescriptions } from "./CarouselWelcome";
import { useState } from 'react';
import { images } from "./CarouselWelcome";
import { CarouselWelcome } from "./CarouselWelcome";

export function Welcome () {
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleNextClick = () => {
        const nextSlide = (activeSlide + 1) % images.length;
        setActiveSlide(nextSlide);
        setActiveImage(nextSlide);
    };
    
    return (
        <div className="hero h-screen bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 w-screen backdrop-filter: blur(64px)">
            <div className="hero-content text-center ">
            <div className="max-w-md justify-center align-center">
                <h2 className="text-4xl font-black">{titlesAndDescriptions[activeImage][0]}</h2>
                <p className="text-md p-5 font-medium">{titlesAndDescriptions[activeImage][1]}</p>
                <div className="my-2">
                {CarouselWelcome.map((image, index) => (
              <img
                key={index}
                src={image.join(',')}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                hidden={activeImage !== index}
                onClick={() => {
                  setActiveSlide(index);
                  setActiveImage(index);
                }}
              />
            ))}
                </div>
                <div className="flex justify-center py-2">
                    {images.map((image, index) => (
                        <button 
                        className={`btn btn-circle btn-xs m-2 ${
                            activeSlide === index ? "border-black bg-transparent" : "border-none"
                          }`}           
                        key={index} 
                        onClick={() => {
                            setActiveSlide(index);
                            setActiveImage(index);
                            }}

                            >
                        </button>
                    ))}
                </div>
                <div className="flex justify-between">
                <button 
                key="skip"
                className={`btn border-none text-current rounded-xl text-lg bg-gradient-to-r from-gray-200 to-gray-300 mt-5 w-1/8 ml-10 ${activeImage <= 1 ? 'visible' : 'hidden'}`}
                onClick={() => navigate('/login')}
                >
                    Saltear
                </button>
                <button
                key="next"
                className={`btn border-none text-current rounded-xl text-lg bg-gradient-to-r from-gray-200 to-gray-300 mt-5 w-1/8 mr-10 ${activeImage <= 1 ? 'visible' : 'hidden'}`}
                onClick={handleNextClick}
                >
                    Siguiente
                </button>
                </div>
                <div className="justify-center align-center">
                <button
            key="start"
            className={`btn border-none text-current rounded-xl text-lg bg-gradient-to-r from-gray-200 to-gray-300 mt-5 w-1/2 ${activeImage === images.length - 1 ? 'visible' : 'hidden'}`}
            onClick={() => {
              navigate('login')
            }}
          >
            Empezar ahora
          </button>
          </div>
                </div>
                </div>
                </div>
                );
            }
