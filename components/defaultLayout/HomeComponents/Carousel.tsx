import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import Btn from "@/components/utils/Btn";
import CheckOut from "./CheckOut";

 const Carousel = () => {
  let name: String = "Contact us"
  let name1: String = "About us"

  const btnStyle1 = {
    backgroundColor: "#FCA702",
    color: "white",
    
  };

  const btnStyle2 = {
    backgroundColor: "#2B6E6E",
    color: "white"
  };
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} autoplay={{ delay: 5000 }} className="mySwiper">
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src="../assets/HomeImages/bannerImage.jpg" alt="" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

          <div className="caption">
            <h5 className="text-yellow-600 md:text-xl mb-7 text-xl">WELCOME TO OUR KandB</h5>
            <h1 className="md:text-5xl text-3xl">THE COOLEST HOTEL</h1>
            <h1 className="md:text-5xl md:mt-5 text-3xl">AND RESORT</h1>
            <p className="md:mt-5 mt-3 text-xs">The KandB Hotel is a modern, elegant hotel, perfect for a romantic, charming vacation in the city of Lagos.</p>
            <div className="flex gap-4 mt-20">
              <Btn name={name} style={btnStyle1} />
              <Btn name={name1} style={btnStyle2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src="../assets/HomeImages/bannerImage.jpg" alt="" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

          <div className="caption">
            <h5 className="text-yellow-600 md:text-xl mb-7 text-xl">WELCOME TO OUR KandB</h5>
            <h1 className="md:text-5xl text-3xl">THE COOLEST HOTEL</h1>
            <h1 className="md:text-5xl md:mt-5 text-3xl">AND RESORT</h1>
            <p className="md:mt-5 mt-3 text-xs">The KandB Hotel is a modern, elegant hotel, perfect for a romantic, charming vacation in the city of Lagos.</p>
            <div className="flex gap-4 mt-20">
              <Btn name={name} style={btnStyle1} />
              <Btn name={name1} style={btnStyle2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caption">Caption 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caption">Caption 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caption">Caption 5</div>
        </SwiperSlide>
      </Swiper>
      <CheckOut />
    </>
  );
}
export default Carousel;