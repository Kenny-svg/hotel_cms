import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa';

const BreadCrumb = (props) => {
    const { url='', parent = '' , title = ''} = props;
    return ( 
        <>

<div class="relative w-full h-64 flex items-center justify-center">
  <div class="absolute inset-0">
    <div class="bg-black opacity-60 h-[380px] -mt-36 w-full"></div>
  </div>
  <div class="absolute text-white">
    <ul class="flex space-x-2 items-center font-bold">
    <li><Link href="/" class="text-white">Home</Link></li>
    <FaChevronRight />

      <li><Link  class="text-yellow-500">{title}</Link></li>
      {/* <li><a  class="text-white">{parent}</a></li> */}
    </ul>
  </div>
  <img src={url} alt="Background Image" class="w-full h-[320px] object-cover -mt-24" />
</div>



            
        </>
     );
}
 
export default BreadCrumb;