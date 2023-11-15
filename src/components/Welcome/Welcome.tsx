import { useNavigate } from "react-router-dom";
import { CarouselWelcome } from "./CarouselWelcome";
import { titlesAndDescriptions } from "./CarouselWelcome";
import { useState } from 'react';

export function Welcome () {
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);
    const [title, setTitle] = useState(titlesAndDescriptions[activeImage][0]);
    const [description, setDescription] = useState(titlesAndDescriptions[activeImage][1]);
    
    return (
        <div className="hero h-screen bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 w-screen backdrop-filter: blur(64px)">
            <div className="hero-content text-center ">
            <div className="max-w-md justify-center align-center">
                <h2 className="text-4xl font-black">{title}</h2>
                <p className="text-lg p-5 font-medium">{description}</p>
                <CarouselWelcome onSlideChange={(image) => {
                    setActiveImage(image.index);
                    setTitle(titlesAndDescriptions[image.index][0]);
                    setDescription(titlesAndDescriptions[image.index][1]);
                    }}></CarouselWelcome>
                <button className="btn border-none text-white text-lg bg-gradient-to-r from-gray-200 to-gray-300 mt-5 w-1/2" onClick={() => navigate('/login')}>Continuar</button>
                </div>
                </div>
                </div>
                );
            }

