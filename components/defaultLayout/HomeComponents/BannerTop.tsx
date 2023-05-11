import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

const BannerTop = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={goToNextSlide}
          className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Previous slide</span>
          <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={goToPreviousSlide}
          className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Next slide</span>
          <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="relative w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } absolute transition-opacity duration-500 ease-in-out`}
          >
            <img
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerTop;
