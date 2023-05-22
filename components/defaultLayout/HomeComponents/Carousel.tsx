import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";


// import required modules
import Btn from "@/components/utils/Btn";
import CheckOut from "./CheckOut";

SwiperCore.use([Navigation, Autoplay]);

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
        <Swiper
          navigation={true}
          autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
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
        <img className="w-full" src="https://img.freepik.com/free-photo/deckchair-swimming-pool-hotel_1150-11073.jpg?w=740&t=st=1684762708~exp=1684763308~hmac=02c35c1b733821b215c1dbe0bd9579a30dd4d5d53abf82a65b19ed9a718cc664" alt="" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

          <div className="caption">
            <h5 className="text-yellow-600 md:text-xl mb-7 text-xl">WELCOME TO OUR KandB</h5>
            <h1 className="md:text-5xl text-3xl uppercase">your comfort, our joy!</h1>
            <h1 className="md:text-5xl md:mt-5 text-3xl uppercase">feel at home!</h1>
            <p className="md:mt-5 mt-3 text-xs">The KandB Hotel is a modern, elegant hotel, perfect for a romantic, charming vacation in the city of Lagos.</p>
            <div className="flex gap-4 mt-20">
              <Btn name={name} style={btnStyle1} />
              <Btn name={name1} style={btnStyle2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src="https://img.freepik.com/free-photo/building-night_1127-3365.jpg?w=740&t=st=1684762955~exp=1684763555~hmac=24ff78950bcc3efdd4b8d5e666cb20a25f6e963b3f6e8880039fa25c9c76e6e3" alt="" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

          <div className="caption">
            <h5 className="text-yellow-600 md:text-xl mb-7 text-xl">WELCOME TO OUR KandB</h5>
            <h1 className="md:text-5xl text-3xl uppercase">you are a gem, you deserve to be here!</h1>
            <h1 className="md:text-5xl md:mt-5 text-3xl uppercase">feel at home!</h1>
            <p className="md:mt-5 mt-3 text-xs">The KandB Hotel is a modern, elegant hotel, perfect for a romantic, charming vacation in the city of Lagos.</p>
            <div className="flex gap-4 mt-20">
              <Btn name={name} style={btnStyle1} />
              <Btn name={name1} style={btnStyle2} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <CheckOut />
    </>
  );
}
export default Carousel;