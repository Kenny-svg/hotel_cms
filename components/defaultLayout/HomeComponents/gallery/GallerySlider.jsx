import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const GallerySlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div>
      <h2></h2>
      <Slider className="w-8/12 md:w-10/12 mx-auto mt-10" asNavFor={nav2} ref={slider1Ref}>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "500px",objectFit: "cover"}}>
            <img style={{width: "100%"}} className=" h-[300px] md:h-full" src="https://img.freepik.com/free-photo/wine-glass_74190-1301.jpg?w=740&t=st=1685444761~exp=1685445361~hmac=0b725eea5a7b4c5adffbad0196363ddcb7ef9a86074fd5b8c1b0de2c3561f444" alt="Dinner Table" />
            <div className=" h-[300px] md:h-full" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "500px", objectFit: "cover"}}>
            <img style={{width: "100%"}} className="h-[300px] md:h-full" src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-sand-with-coconut-palm-tree-blue-sky-white-cloud_74190-7479.jpg?w=740&t=st=1685444858~exp=1685445458~hmac=169f35696e52aed8808bc4ed87f8a01cc159e5e28ed565e33e3aedf1dbb2e698" alt="Dinner Table" />
            <div className=" h-[300px] md:h-full" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "500px", objectFit: "cover"}}>
            <img style={{width: "100%"}} className="h-[300px] md:h-full" src=" https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18744.jpg?w=740&t=st=1685445594~exp=1685446194~hmac=c7e6618d402508e21cfe0086d8ba1ee1894b5105a621e981de1f2b60b60e9758" alt="Dinner Table" />
            <div className=" h-[300px] md:h-full" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "500px", objectFit: "cover"}}>
            <img style={{width: "100%"}} className=" h-[300px] md:h-full" src="https://img.freepik.com/free-photo/elegant-wedding-dishes_1157-17838.jpg?w=740&t=st=1685445687~exp=1685446287~hmac=ce1b27874f832f9975e31d595d20463ba64dba6fd6866617438231d7d10a69aa" alt="Dinner Table" />
            <div className=" h-[300px] md:h-full" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "500px", objectFit: "cover"}}>
            <img style={{width: "100%"}} className="h-[300px] md:h-full" src="https://img.freepik.com/free-photo/elegant-wedding-dishes_1157-17838.jpg?w=740&t=st=1685445687~exp=1685446287~hmac=ce1b27874f832f9975e31d595d20463ba64dba6fd6866617438231d7d10a69aa" alt="Dinner Table" />
            <div className=" h-[300px] md:h-full" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "500px", objectFit: "cover"}}>
            <img style={{width: "100%"}} className="h-[300px] md:h-full" src="https://img.freepik.com/free-photo/elegant-wedding-dishes_1157-17838.jpg?w=740&t=st=1685445687~exp=1685446287~hmac=ce1b27874f832f9975e31d595d20463ba64dba6fd6866617438231d7d10a69aa" alt="Dinner Table" />
            <div className=" h-[300px] md:h-full" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>
        </div>
        </div>
      </Slider>
      <Slider
      className="w-8/12 md:w-10/12 mx-auto md:mt-0 -mt-48"
        asNavFor={nav1}
        ref={slider2Ref}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "300px" }}>
            <img style={{width: "100%"}} className="h-[200px] md:h-full" src="https://img.freepik.com/free-photo/wine-glass_74190-1301.jpg?w=740&t=st=1685444761~exp=1685445361~hmac=0b725eea5a7b4c5adffbad0196363ddcb7ef9a86074fd5b8c1b0de2c3561f444" alt="Dinner Table" />
            <div className="md:h-full h-[200px]" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "300px" }}>
            <img style={{width: "100%"}} className="h-[200px] md:h-full" src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-sand-with-coconut-palm-tree-blue-sky-white-cloud_74190-7479.jpg?w=740&t=st=1685444858~exp=1685445458~hmac=169f35696e52aed8808bc4ed87f8a01cc159e5e28ed565e33e3aedf1dbb2e698" alt="Dinner Table" />
            <div className="md:h-full h-[200px]" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "300px" }}>
            <img style={{width: "100%"}} className="h-[200px] md:h-full" src=" https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18744.jpg?w=740&t=st=1685445594~exp=1685446194~hmac=c7e6618d402508e21cfe0086d8ba1ee1894b5105a621e981de1f2b60b60e9758" alt="Dinner Table" />
            <div className="md:h-full h-[200px]" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "300px" }}>
            <img style={{width: "100%"}} className="h-[200px] md:h-full" src="https://img.freepik.com/free-photo/elegant-wedding-dishes_1157-17838.jpg?w=740&t=st=1685445687~exp=1685446287~hmac=ce1b27874f832f9975e31d595d20463ba64dba6fd6866617438231d7d10a69aa" alt="Dinner Table" />
            <div className="md:h-full h-[200px]" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "300px" }}>
            <img style={{width: "100%"}} className="h-[200px] md:h-full" src="https://img.freepik.com/free-photo/elegant-wedding-dishes_1157-17838.jpg?w=740&t=st=1685445687~exp=1685446287~hmac=ce1b27874f832f9975e31d595d20463ba64dba6fd6866617438231d7d10a69aa" alt="Dinner Table" />
            <div className="md:h-full h-[200px]" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </div>
        </div>
        <div>
        <div style={{ position: "relative", width: "100%", maxWidth: "100%", height: "300px" }}>
            <img style={{width: "100%"}} className="h-[200px] md:h-full" src="https://img.freepik.com/free-photo/elegant-wedding-dishes_1157-17838.jpg?w=740&t=st=1685445687~exp=1685446287~hmac=ce1b27874f832f9975e31d595d20463ba64dba6fd6866617438231d7d10a69aa" alt="Dinner Table" />
            <div className="md:h-full h-[200px]" style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </div>
        </div>

      </Slider>
    </div>
  );
};

export default GallerySlider;
