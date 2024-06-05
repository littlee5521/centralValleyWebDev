import { useState, useEffect } from "react";
import Image from "next/image";

type CarouselProps = {
  images: { mobile: string; desktop: string }[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-5/6 overflow-hidden">
      <div
        className="flex transition-transform duration-700 h-full ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 relative h-full w-full">
            <Image
              className="block sm:hidden"
              src={image.mobile}
              alt={`Slide ${index} Mobile`}
              layout="fill"
              objectFit="contain"
            />
            <Image
              className="hidden sm:block"
              src={image.desktop}
              alt={`Slide ${index} Desktop`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-3">
        <button
          onClick={goToPreviousSlide}
          className="p-2 bg-gray-800 text-white"
        >
          Previous
        </button>
        <button onClick={goToNextSlide} className="p-2 bg-gray-800 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
