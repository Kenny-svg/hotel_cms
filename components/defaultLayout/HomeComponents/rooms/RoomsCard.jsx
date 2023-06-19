import { viewDetails } from "@/features/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
const RoomsCard = () => {
    const router = useRouter()
    const hotels = useSelector(state => state.wishlist.hotels);
    const dispatch = useDispatch()
    const handleDetailsView = (itemId) => {
        dispatch(viewDetails(itemId));
        router.push(`/details?id=${itemId}`);
      };
    return ( 
        <>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 relative mb-20">
                {hotels.map(hotel => (
                    <>
                <div key={hotel.id} className="grid items-center w-full relative md:ml-2">
                <div>
                    <img className=" w-max-full w-full object-cover h-[300px]" src={hotel.url} />
                </div>
                </div>
                <div className="flex items-center z-10 mb-10">
                <div className="items-center bg-white shadow-xl h-auto w-11/12 md:w-full mx-auto md:mx-0 -mt-3 md:mt-2">
                    <div className="m-5">
                    <h1 className="font-bold text-2xl">{hotel.category}</h1>
                    <hr className="mt-3" />
                    <p className="mt-3">{hotel.desc}</p>
                    <div className="flex justify-between mt-5">
                        <p className="font-bold text-sm">ROOM: <span>{hotel.room}</span></p>
                        <p className="font-bold text-sm">BATHROOM: <span>{hotel.broom}</span></p>
                    </div>
                    <hr className="mt-3" />
                    <button onClick={() => handleDetailsView(hotel.id)} className="px-8 py-2 bg-yellow-500 text-white font-bold text-sm mb-10 border-2 border-yellow-500 transition duration-300 hover:bg-white hover:border-black hover:border-2 hover:text-black mt-8">
                            VIEW DETAILS
                        </button>
                    </div>
                </div>
                </div>
                </>
                 ))}
            </div>

          
        </>
     );
}
 
export default RoomsCard;