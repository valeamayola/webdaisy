import '../../App.css';
import { useState } from 'react';

type Image = {
    url: string;
    title: string;
    description: string;
  };
  
 export const images: Image[] = [
    {
      url: '../../../src/img/welcome/svgwelcome1.svg',
      title: 'Reporta incidentes de forma rápida y sencilla',
      description: 'Con nuestra app, puedes reportar cualquier incidente que veas en tu ciudad. Solo toma una foto, agrega una breve descripción y envíalo.',
    },
    {
      url: '../../../src/img/welcome/svgwelcome2.svg',
      title: 'Ayuda a mejorar tu comunidad',
      description: 'Tu reporte ayudará a que el municipio conozca los problemas que existen para poder tomar medidas para resolverlos y mejorar la calidad de vida de todos.',
    },
    {
      url: '../../../src/img/welcome/svgwelcome3.svg',
      title: 'Sé parte del cambio',
      description: 'Todos podemos contribuir a que nuestra comunidad sea un lugar mejor. Con nuestra app, puedes hacer tu parte para reportar los problemas que ves y ayudar a que se resuelvan.',
    },
  ];

  const titlesAndDescriptions: [string, string][] = images.map((image) => [image.title, image.description]);
  
  export { titlesAndDescriptions };
  
  
  const CarouselWelcome: [string][] = images.map((image) => [image.url]);
  
  export {CarouselWelcome}