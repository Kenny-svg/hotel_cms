import RoomsCard from "./RoomsCard";

const RoomsCategory = () => {
    return ( 
        <>
            <div className="w-10/12 mx-auto mt-10">
                <h1 className="italic font-semibold text-2xl">KandB<span className="text-yellow-500">Rooms</span></h1>
                <p className="mt-10 text-xl">Caring comes easily to those of us who are privileged to cater to you at Eko Signature. The vibrant colours of the furnishing indulges you. Our suites embody elegance that expresses the art of simple luxury; one whose soft warm embrace can’t wait to relax you. With a bold contemporary style, the rooms are tastefully designed with the professional executive in mind.</p>
                <div>
                    <h1 style={{textShadow: "2px 2px 4px rgba(0,0,0,0.5)"}} className="mt-10 text-4xl font-bold text text-left">Overview</h1>
                    <ul className="rounded-md p-4 mb-10">
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-gray-800">171 Suites</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-gray-800">146 Club Suites</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-gray-800">9 Premium Suites</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-gray-800">15 Signature Suites</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-gray-800">1 Presidential Suite</span>
                </li>
                </ul>
                </div>
            </div>
            <RoomsCard />
        </>
     );
}
 
export default RoomsCategory;