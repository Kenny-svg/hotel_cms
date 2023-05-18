import CountUp from 'react-countup';
import { FaAward } from 'react-icons/fa';
import { BiHappyAlt } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import { BsCupHotFill } from 'react-icons/bs'
const BannerMid = () => {
    return ( 
        <>

<div className="relative">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <img className="object-cover h-[700px] sm:h-[500px] md:h-[350px] w-full mt-10 z-10" src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18726.jpg?w=740&t=st=1683892209~exp=1683892809~hmac=a441abae0963d82b5bf6e972343517743310d674d432b493509603932310cd44" />
  <div className="absolute inset-0 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-10 xl:gap-16 items-center justify-center z-20">
    <div className="text-center justify-center items-center mb-4">
      <BiHappyAlt size={50}  className='text-yellow-500 ml-8 mb-3' />
      {/* <p className="text-white text-5xl font-extrabold">      <CountUp start={0} end={30} duration={2.5} /></p> */}
      <p className='font-bold text-yellow-500 mt-3'>+Happy Clients</p>
    </div>
    <div className="text-center justify-center items-center mb-4">
        <IoIosPeople size={50}  className='text-yellow-500 ml-6 mb-3' />
        {/* <p className="text-white text-5xl font-extrabold"><CountUp start={0} end={600} duration={2.5} /></p> */}
        <p className='font-bold text-yellow-500 mt-3'>+Our Staffs</p>
    </div>
    <div className="text-center justify-center items-center mb-4">
        <BsCupHotFill size={50}  className='text-yellow-500 ml-10 mb-3' />
        {/* <p className="text-white text-5xl font-extrabold"><CountUp start={0} end={1500} duration={2.5} /></p> */}
        <p className='font-bold text-yellow-500 mt-3'>+Cup of Coffee</p>
    </div>
    <div className="text-center justify-center items-center mb-4">
        <FaAward size={50}  className='text-yellow-500 ml-6 mb-3' />
        {/* <p className="text-white text-5xl font-extrabold"><CountUp start={0} end={1500} duration={2.5} /></p> */}
        <p className='font-bold text-yellow-500 mt-3'>+Win awards</p>
    </div>
  </div>
</div>

{/* 
                <div>
                <CountUp start={0} end={100} duration={2.5} />
                </div> */}

        </>
     );
}
 
export default BannerMid;