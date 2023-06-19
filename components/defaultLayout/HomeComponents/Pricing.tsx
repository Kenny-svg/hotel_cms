import { FaPaperPlane, FaRocket } from "react-icons/fa";
const Pricing = () => {
    return ( 
        <>
        <div className="text-center mt-10">
            <h1 className="text-xl font-bold uppercase">Pricing</h1>
            <h1 className="text-4xl font-bold uppercase">Pricing plan</h1>
            <p className="w-1/2 mx-auto">Our Pricing are Value-based because we truly understand what your motivation are.Knowing that value is determined by you our valued customer who choose to pay to get value.</p>
            <p className="w-1/2 mx-auto mt-4">Therefore we have placed the prices of our product and services on what is believed its worth.</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 mx-auto gap-4 mt-20">
        <div className="relative max-w-sm rounded overflow-hidden border-b-yellow-500 border-b-2 shadow-2xl bg-white">
      <div className="absolute inset-x-0 top-0 flex items-center justify-center bg-yellow-500 h-20 rounded-t-lg opacity-75">
        <div className="icon-container rounded-full bg-white flex items-center justify-center h-16 w-16">
          <FaPaperPlane className="text-yellow-500 text-4xl" />
        </div>
      </div>
      <div className=" py-4 flex justify-center">
        <div className=" justify-center text-center">
        <div className="text-4xl font-bold text-yellow-500 mt-20">
        <h1 className="text-xl mb-2">Standard Package</h1><sup>&#8358;</sup>10,000
        </div>
        <div className="text-gray-700 text-base">per night</div>
        <ul className="mt-4">
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Restaurant (Breakfast)</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Located at the Ground Floor</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Good Customer Service</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">24 Hours Power Supply</span>
          </li>
        </ul>
       
        </div>
        
      </div>
    </div>
    <div className="relative max-w-sm rounded overflow-hidden border-b-custom-blue border-b-2 shadow-2xl bg-white md:-mt-10">
      <div className="absolute inset-x-0 top-0 flex items-center justify-center bg-custom-blue h-20 rounded-t-lg opacity-75">
        <div className="icon-container rounded-full bg-white flex items-center justify-center h-16 w-16">
          <FaRocket className="text-custom-blue text-4xl" />
        </div>
      </div>
      <div className=" py-4 flex justify-center">
        <div className=" justify-center text-center">
        <div className="text-4xl font-bold text-custom-blue mt-20">
        <h1 className="text-xl mb-2">Classic Package</h1><sup>&#8358;</sup>12,000
        </div>
        <div className="text-gray-700 text-base">per night</div>
        <ul className="mt-4">
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-custom-blue  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Restaurant (Breakfast)</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-custom-blue  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Located at the First Floor</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-custom-blue  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Good Customer Service</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-custom-blue  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Big Sofa</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-custom-blue  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">24 Hours Power Supply</span>
          </li>
        </ul>
       
        </div>
        
      </div>
    </div>
    <div className="relative max-w-sm rounded overflow-hidden border-b-yellow-500 border-b-2 shadow-2xl bg-white">
      <div className="absolute inset-x-0 top-0 flex items-center justify-center bg-yellow-500 h-20 rounded-t-lg opacity-75">
        <div className="icon-container rounded-full bg-white flex items-center justify-center h-16 w-16">
          <FaRocket className="text-yellow-500 text-4xl" />
        </div>
      </div>
      <div className=" py-4 flex justify-center">
        <div className=" justify-center text-center">
        <div className="text-4xl font-bold text-yellow-500 mt-20">
        <h1 className="text-xl mb-2">Diplomatic Package</h1><sup>&#8358;</sup>15,000
        </div>
        <div className="text-gray-700 text-base">per night</div>
        <ul className="mt-4">
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Restaurant (Breakfast)</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Located at the Ground Floor</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Good Customer Service</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Big Refrigerator</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">24 Hours Power Supply</span>
          </li>
        </ul>
       
        </div>
        
      </div>
    </div>
        </div>
        {/* second grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 mx-auto w-10/12 gap-4 mt-10">
        <div className="relative max-w-xl rounded overflow-hidden border-b-yellow-500 border-b-2 shadow-2xl bg-white">
      <div className=" absolute inset-x-0 top-0 flex items-center justify-center bg-yellow-500 h-20 rounded-t-lg opacity-75">
        <div className="icon-container rounded-full bg-white flex items-center justify-center h-16 w-16">
          <FaRocket className="text-yellow-500 text-4xl" />
        </div>
      </div>
      <div className=" py-4 flex justify-center">
        <div className=" justify-center text-center">
        <div className="text-4xl font-bold text-yellow-500 mt-20">
        <h1 className="text-xl mb-2">Deluxe Package</h1><sup>&#8358;</sup>18,000
        </div>
        <div className="text-gray-700 text-base">per night</div>
        <ul className="mt-4">
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Restaurant (Breakfast)</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Located at the Ground Floor</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Good Customer Service</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Big Refrigerator</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">24 Hours Power Supply</span>
          </li>
        </ul>
        
        </div>
        
      </div>
    </div>
    <div className="w-full relative max-w-xl rounded overflow-hidden border-b-yellow-500 border-b-2 shadow-2xl bg-white">
      <div className="absolute inset-x-0 top-0 flex items-center justify-center bg-yellow-500 h-20 rounded-t-lg opacity-75">
        <div className="icon-container rounded-full bg-white flex items-center justify-center h-16 w-16">
          <FaRocket className="text-yellow-500 text-4xl" />
        </div>
      </div>
      <div className=" py-4 flex justify-center">
        <div className=" justify-center text-center">
        <div className="text-4xl font-bold text-yellow-500 mt-20">
        <h1 className="text-xl mb-2">Executive Package</h1><sup>&#8358;</sup>20,000
        </div>
        <div className="text-gray-700 text-base">per night</div>
        <ul className="mt-4">
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Restaurant (Breakfast)</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Located at the Ground Floor</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Good Customer Service</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">Big Refrigerator</span>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500  mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.707 5.293a1 1 0 00-1.414-1.414L8 14.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11z"/></svg>
            <span className="font-bold text-gray-700 text-sm">24 Hours Power Supply</span>
          </li>
        </ul>
        
        </div>
        
      </div>
    </div>
        </div>
       
            
        </>
     );
}
 
export default Pricing;