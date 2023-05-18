import Btn from "../../utils/Btn";

const DiscountBanner = () => {
    let name: String = "Book now"
    const btnStyle1 = {
        backgroundColor: "#FCA702",
        color: "#FFF",
        borderColor: "#FCA702",
        border: "1px solid #FCA702"
    }
    return ( 
        <>

<div className="relative">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <img className="object-cover h-[700px] sm:h-[500px] md:h-[350px] w-full mt-10 z-10" src="https://img.freepik.com/free-photo/umbrella-chair_74190-3726.jpg?w=740&t=st=1684150918~exp=1684151518~hmac=f8abe1aa93670127f0d119293d14721b719c8f83dad5b2d62014b60f6662db86" />
  <div className="absolute inset-0 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-10 xl:gap-16 items-center justify-center z-20">
        <div className="text-center">
            <h1 className='text-4xl font-bold text-white'>GET DISCOUNT 15-25% OFF ANY ROOM PACKAGE</h1>
            <p className="text-xl text-white mt-5">WHEN YOU PURCHASE ANY PACKAGE & GET NEXT ROOM</p>
            <div className="mt-5">
                <Btn name={name} style={btnStyle1} />
            </div>
        </div>
  </div>
</div>


          

        </>
     );
}
 
export default DiscountBanner;