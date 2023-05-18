import { BiCctv } from "react-icons/bi";
import {  FaTv, FaWifi } from "react-icons/fa";
import { HiOutlineTable } from "react-icons/hi";
const Card = () => {
    return ( 
        <>
            <div className="grid md:grid-cols-4 grid-cols-1 mx-auto w-10/12 gap-4 mt-5">
                <div className="shadow-lg bg-white text-center flex justify-center items-center rounded-lg">
                    <div className=""> 
                        <HiOutlineTable className="mx-auto text-4xl text-yellow-500 mt-5" />
                        <h1 className="mt-2 mb-5">Air Conditioner</h1>
                    </div>

                </div>
                <div className="shadow-lg bg-white text-center flex justify-center items-center rounded-lg">
                    <div className=""> 
                        <FaWifi className="mx-auto text-4xl text-yellow-500 mt-5" />
                        <h1 className="mt-2 mb-5">Free WiFi</h1>
                    </div>

                </div>
                <div className="shadow-lg bg-white text-center flex justify-center items-center rounded-lg">
                    <div className=""> 
                        <BiCctv className="mx-auto text-4xl text-yellow-500 mt-5" />
                        <h1 className="mt-2 mb-5">High Security</h1>
                    </div>

                </div>
                <div className="shadow-lg bg-white text-center flex justify-center items-center rounded-lg">
                    <div className=""> 
                        <FaTv className="mx-auto text-4xl text-yellow-500 mt-5" />
                        <h1 className="mt-2 mb-5">Smart TV</h1>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default Card;