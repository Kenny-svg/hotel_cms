import Link from "next/link";
import { useSelector } from "react-redux";
import Layout2 from '../Layout/Layout2'
import { FaAirFreshener, FaBed, FaMugHot, FaWifi, FaWineBottle } from 'react-icons/fa'

const Details = () => {
  const hotels = useSelector((state) => state.wishlist.hotels);

  // Get the hotel ID from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = parseInt(urlParams.get("id"));

  // Find the hotel item with the matching ID
  const hotel = hotels.find((item) => item.id === itemId);

  return (
    <>
    <Layout2>
      {hotel ? (
        <div className="relative py-28">
          <h1 className="mt-10 text-6xl font-semibold text-center">{hotel.category} Room</h1>
          <img className="bg-white mx-auto p-10 border mt-10 w-10/12 md:h-[600px] mb-10" src={hotel.url} />
          <div className="w-10/12 md:w-10/12 mx-auto flex gap-8 md:flex-row flex-col">
            <div className=" md:w-9/12 bg-white p-10 border">
          <h1 className="pt-3 pb-3 text-2xl font-semibold border-t border-b border-yellow-500">{hotel.category} Room</h1>
          <p className="text-yellow-500 mt-5 tracking-widest text-sm uppercase  ">Room description</p>
            <p className="mt-5">{hotel.desc}</p>
            <ul>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <p className="font-bold ">Room <span className="font-normal">{hotel.room}</span></p>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <p className="font-bold ">Bathroom <span className="font-normal">{hotel.broom}</span></p>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <p className="font-bold "><span className="font-normal">{hotel.size}</span></p>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <p className="font-bold "><span className="font-normal">{hotel.view}</span></p>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <p className="font-bold "><span className="font-normal">{hotel.internet}</span></p>
                </li>
            </ul>

            <Link href="/booking">
          <button  className="px-8 py-2 bg-yellow-500 text-white font-bold text-sm mb-2 border-2 border-yellow-500 transition duration-300 hover:bg-white hover:border-black hover:border-2 hover:text-black mt-8">
                BOOK ROOM
        </button>
        </Link>
           
            </div>
            <div className="md:w-3/12 md:h-[350px] border bg-white p-10" >
                <h1 className="text-center tracking-widest text-yellow-500 uppercase">Room features</h1>
                <ul className="py-3">
                <li className="flex items-center space-x-5 mt-2 py-2">
                   <FaBed className="text-2xl text-yellow-500 ml-5" />
                    <p className="font-bold "><span className="font-normal text-sm">DOUBLE KING BED</span></p>
                </li>
                <li className="flex items-center space-x-5 mt-2 py-2">
                   <FaMugHot className="text-2xl text-yellow-500 ml-5" />
                    <p className="font-bold "><span className="font-normal text-sm">BREAKFAST</span></p>
                </li>
                <li className="flex items-center space-x-5 mt-2 py-2">
                   <FaAirFreshener className="text-2xl text-yellow-500 ml-5" />
                    <p className="font-bold "><span className="font-normal text-sm">AIR CONDITIONER</span></p>
                </li>     
                <li className="flex items-center space-x-5 mt-2 py-2">
                   <FaWineBottle className="text-2xl text-yellow-500 ml-5" />
                    <p className="font-bold "><span className="font-normal text-sm">MINI BAR</span></p>
                </li>     <li className="flex items-center space-x-5 mt-2 py-2">
                   <FaWifi className="text-2xl text-yellow-500 ml-5" />
                    <p className="font-bold "><span className="font-normal text-sm">WI-FI SERVICE</span></p>
                </li>
                </ul>
                
            </div>
          </div>

          {/* Display other details */}
         
        </div>
      ) : (
        <div>Hotel not found</div>
        
      )}
      </Layout2>
    </>
  );
};

export default Details;
