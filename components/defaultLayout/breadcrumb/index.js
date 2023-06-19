import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa';

const BreadCrumb = (props) => {
    const { url='', parent = '' , title = ''} = props;
    return ( 
        <>

<div className="relative w-full h-64 flex items-center justify-center">
  <div className="absolute inset-0">
    <div className="bg-black opacity-60 h-[380px] -mt-36 w-full"></div>
  </div>
  <div className="absolute text-white">
    <ul className="flex space-x-2 items-center font-bold">
    <li><Link href="/" className="text-white">Home</Link></li>
    <FaChevronRight />

      <li  className="text-yellow-500">{title}</li>
      {/* <li><a  className="text-white">{parent}</a></li> */}
    </ul>
  </div>
  <img src={url} alt="Background Image" className="w-full h-[320px] object-cover -mt-24" />
</div>

            
        </>
     );
}
 
export default BreadCrumb;