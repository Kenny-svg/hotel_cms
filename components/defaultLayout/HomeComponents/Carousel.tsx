import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import Btn from "@/components/utils/Btn";
import CheckOut from "./CheckOut";

export default function App() {
  let name: String = "Contact us"
  let name1: String = "hey"

  const btnStyle1 = {
    backgroundColor: "blue",
    color: "white"
  };

  const btnStyle2 = {
    backgroundColor: "green",
    color: "black"
  };
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img style={{}} src="../assets/HomeImages/bannerImage.jpg" alt="" />
          <div className="caption">
            <h5 className="text-yellow-600 md:text-xl mb-7 text-xl">WELCOME TO OUR CAONI!</h5>
            <h1 className="md:text-5xl text-3xl">THE COOLEST HOTEL</h1>
            <h1 className="md:text-5xl mt-5 text-3xl">AND RESORT</h1>
            <p className="md:mt-5 text-sm">The Caoni Hotel is a modern, elegant hotel, perfect for a romantic, charming vacation in the city of Lagos.</p>
            <div className="flex gap-4 mt-20">
              <Btn name={name} style={btnStyle1} />
              <Btn name={name1} style={btnStyle2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caption">Caption 2</div>
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
