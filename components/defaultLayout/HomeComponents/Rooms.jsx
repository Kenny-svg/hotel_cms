import { FaRegHeart } from 'react-icons/fa';
// import data from '../../../public/data/data.json'
import Btn from '@/components/utils/Btn';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist,removeFromWIshlist, } from '@/features/slices/wishlistSlice';
import { useState} from 'react'
import { useRouter } from 'next/router';
import React from 'react'
import TransitionsModal from '../HomeComponents/Modal';

const Rooms = () => {
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let content = "Room added to wishlist!"
    let contentTwo = "Room already added to wishlist!"

    const router = useRouter();
    const dispatch = useDispatch();
    const hotels = useSelector(state => state.wishlist.hotels);
    
    const [selectedItemNo, setSelectedItemNo] = useState(null);

    const handleAddToWishlist = (item) => {
       
        dispatch(addToWishlist(item))
        setSelectedItemNo(item);
        setOpen(true)
    }
    // const handleDel = (itemId) => {
    //     dispatch(removeFromWIshlist(itemId))
    // }

    let name = "Book now"
    const btnStyle1 = {
        backgroundColor: "#fff",
        color: "#FCA702",
        borderColor: "#FCA702",
        border: "1px solid #FCA702"
    }
    return ( 
        <>
        
        <div className='mt-20 w-10/12 mx-auto'>
        <div className="text-center mt-10">
            <h1 className="text-xl font-bold uppercase">Rooms</h1>
            <h1 className="text-4xl font-bold uppercase">Best Rooms</h1>
            <p className="w-1/2 mx-auto">Here Are Rooms in KandB Hotel.</p>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
            {hotels.map(hotel => (
            <>
            <div className='bg-white max-w-lg p-5 rounded-lg'>
                <div className='flex justify-between'>
                    <h1>{hotel.category}</h1>
                    {/* <p onClick={handleDel} >D</p> */}
                    <p onClick={() => handleAddToWishlist(hotel)} className='bg-yellow-500 text-white rounded-full p-2 hover:bg-custom-blue cursor-pointer'><FaRegHeart className="cursor-pointer" /></p>
                </div>
                <div className='flex justify-between mt-8'>
                    <h1 className='text-custom-blue font-semibold'>&#8358;{hotel.amount}<span className='font-bold text-gray-800'>\Per Night</span></h1>
                    <p className=''>{hotel.room_number}</p>
                </div>
                <div className='flex justify-between mt-8 shadow-lg p-2 rounded-lg'>
                    <h1>{hotel.beds}</h1>
                    <p>{hotel.bath}</p>
                    <p>{hotel.temp}</p>
                    
                </div>
                <div className='mt-3'>
                    <Link href='/booking'>
                    <Btn name={name} style={btnStyle1}/>
                    </Link>
                </div>

            </div>


            </>
            
        ))}
            </div>
            
          
        </div>
        <div className='flex justify-center mt-5'>
            <Link href='/rooms'>
                <button className='px-8 py-3 border-2 bg-yellow-500 text-white font-bold rounded-full'>See more</button>
            </Link>
            </div>
         {open ? <TransitionsModal open={open} contentTwo={contentTwo} handleClose={handleClose} content={content} /> : ''}
         
        </>
     );
}
 
export default Rooms;