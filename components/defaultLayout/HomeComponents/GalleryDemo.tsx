import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Slider from "react-slick";



interface ImageGalleryProps {
  images: { src: string; alt: string }[]
}
const Responsive = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  // const [modalOpen, setModalOpen] = useState(false);
  const lastIndex = images.length - 1

  function handleClick(index: number) {
    setCurrentIndex(index)
  }

  function handleClose() {
    setCurrentIndex(null)
  }

  function handlePrev() {
    if (currentIndex === null) return
    const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1
    setCurrentIndex(prevIndex)
  }

  function handleNext() {
    if (currentIndex === null) return
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleContentClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
  }


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2 cursor-pointer mt-10" onClick={() => handleClick(index)}>
            <div className="relative effecttwo">
              
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover cursor-pointer rounded-lg"
                
              />
              <div className="absolute effect top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 bg-black rounded-lg"></div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      { currentIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleClose}>
          <div className="absolute inset-0 bg-gray-800 opacity-75 " />

          <div className="relative z-10 max-w-3xl mx-auto px-4" onClick={handleContentClick}>
            <div className="relative rounded-lg shadow-lg bg-white">
              <button
                type="button"
                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
                onClick={handleClose}
              >
                <XIcon className="w-6 h-6" />
              </button>

              <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
              <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800"
                  onClick={handlePrev}
                >
                  <ChevronLeftIcon className="w-8 h-8" />
                </button>
              </div>

              <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800"
                  onClick={handleNext}
                >
                  <ChevronRightIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Responsive;
