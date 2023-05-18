import { useState, useEffect } from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

type Slide = {
  users: any;
  img: string | undefined;
  title: string;
  description: string;
};

type Props = {
  slides: Slide[];
};
const TextCarousel: React.FC<Props> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center mt-[400px]  bg-white w-11/12 mx-auto md:w-1/2 h-auto rounded-lg">
            <div className='flex justify-end -mt-5 mr-10'>
                <FaQuoteRight className='text-5xl text-yellow-300' />
            </div>
            <div>
              <div className='flex ml-5 text-yellow-300'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div  className='ml-5 flex-wrap text-left'>
                <p className='mt-3 pr-5'>{slide.description}</p>
                </div>
                <div className='flex'>
                  <img src={slide.img} className=' rounded-full border-2 p-2 border-dotted border-yellow-300 ml-5 mb-5 mt-5' alt="" />
                  <div className='mt-5 ml-10 text-left'>
                    <p className='font-semibold text-custom-blue'>{slide.users.name}</p>
                    <p>{slide.users.state} </p>
                    <p>{slide.users.num}</p>
                    <p>{slide.users.type}</p>
                  </div>
                </div>
                {/* <p className="mt-4 text-xl text-gray-600">{slide.description}</p> */}
              </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default TextCarousel;
