import '../../App.css';

type Image = {
    url: string;
    title: string;
    description: string;
  };
  
  const images: Image[] = [
    {
      url: '../../../src/img/welcome/svgwelcome1.svg',
      title: 'Reporta incidentes de forma rápida y sencilla',
      description: 'Con nuestra app, puedes reportar cualquier incidente que veas en tu ciudad. Solo toma una foto, agrega una breve descripción y envíalo.',
    },
    {
      url: '../../../src/img/welcome/svgwelcome2.svg',
      title: 'Ayuda a mejorar tu comunidad',
      description: 'Tu reporte ayudará a que el municipio tenga una mejor idea de los problemas que existen en la ciudad. Esto ayudará a que tomen medidas para resolverlos y mejorar la calidad de vida de todos.',
    },
    {
      url: '../../../src/img/welcome/svgwelcome3.svg',
      title: 'Sé parte del cambio',
      description: 'Todos podemos contribuir a que nuestra comunidad sea un lugar mejor. Con nuestra app, puedes hacer tu parte para reportar los problemas que ves y ayudar a que se resuelvan.',
    },
  ];

  const titlesAndDescriptions: [string, string][] = images.map((image) => [image.title, image.description]);
  
  export { titlesAndDescriptions };

  export type CarouselWelcomeProps = {
    onSlideChange: (image: typeof Image & { index: number }) => void;
  };
  
  export function CarouselWelcome({ onSlideChange }: CarouselWelcomeProps) {
    return (
      <div className="w-90 carousel rounded-box">
        {images.map((image) => (
          <div className="carousel-item w-full" key={image.url}>
            <img src={image.url} className="w-full" alt="Tailwind CSS Carousel component" />
          </div>
        ))}
      </div>
    );
  }