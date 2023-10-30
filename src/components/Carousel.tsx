const images = [
  '../src/img/svg1.svg',
  '../src/img/svg2.svg',
  '../src/img/svg3.svg',
];

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {images.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img src={image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href={`#slide${index}`} className="btn btn-circle bg-neutral">❮</a>
            <a href={`#slide${index + 2}`} className="btn btn-circle bg-neutral">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;