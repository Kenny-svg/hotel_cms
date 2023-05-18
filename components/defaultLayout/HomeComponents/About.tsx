import Btn from "@/components/utils/Btn";
import { HiFastForward } from "react-icons/hi"
const About = () => {
    let name: String = "Discover more"
    const btnStyle1 = {
        backgroundColor: "#FCA702",
        color: "white",
        
      };
    return ( 
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 w-10/12 mx-auto gap-4 mt-20">
                <div>
                    <div className="relative">
                        <img className="rounded-lg w-2/4 h-[200px] md:w-2/4 md:h-[300px] object-cover" src="https://img.freepik.com/free-photo/woman-talking-with-hotel-receptionist-lobby_23-2149304051.jpg?w=740&t=st=1683886984~exp=1683887584~hmac=bfd37a696ac7f4defabab1a7582308eefefeb3d3b404ce484e20e28b933ec180" />
                        <img className=" md:ml-[160px] ml-[70px] -mt-48 w-3/4 md:-mt-64 rounded-lg md:w-[65%]  md:h-[200px] object-cover" src="https://img.freepik.com/premium-photo/business-afro-american-woman-holding-files-near-office_255667-2582.jpg?w=740" />
                    </div>
                </div>
                <div className="md:mt-0 mt-10">
                    <div>
                        <h1 className="text-xl font-bold">ABOUT US</h1>
                        <h1 className="text-4xl font-bold mt-5">WE PROVIDE BEST PLACE TO ENJOY YOUR TIME</h1>
                        <p className="mt-5">We build connections. We leverage our platform and technology capabilities across an extensive portfolio of businesses and brands to orchestrate the movement of people and the delivery of travel experiences on both a local and global basis. We help our travelers and our partners find the right pathways .through millions of possibilities to reach the best possible outcome.</p>
                    </div>
                    <div className="mt-5">
                    <ul className="">
                        <li className="flex gap-4">
                        <HiFastForward className="text-yellow-500" />
                            we provide online booking
                        </li>
                        <li className="flex gap-4">
                        <HiFastForward className="text-yellow-500"/>
                            We have Good Customer Service
                        </li>
                        <li className="flex gap-4">
                        <HiFastForward className="text-yellow-500" />
                            We provid affordable rooms
                        </li>
                    </ul>
                    </div>
                    <div className="mt-3">
                        <Btn name={name} style={btnStyle1}/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;