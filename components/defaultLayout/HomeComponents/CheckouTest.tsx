import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import 'react-datepicker/dist/react-datepicker.css';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import  Dropdown  from './DropDown'
import RoomType from './RoomType'
import CustomDatePicker from './gallery/DatePicker'
import Btn from '@/components/utils/Btn';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'flowbite-react';
import { selectRoom } from '@/features/slices/wishlistSlice';


// const [selectedRoom, setSelectedRoom] = useState('');
const dispatch = useDispatch()
const hotels = useSelector((state: any) => state.wishlist.hotels)

const handleSelectRoom = (event: any) => {
  const selectedRoom = event.target.value;
  dispatch(selectRoom(selectedRoom))
}
const onChange = (
  
  value: DatePickerProps['value'] | RangePickerProps['value'],
  dateString: [string, string] | string,
) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const handleDateChange = (date: any) => {
  console.log('Selected date:', date);
};
const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
  console.log('onOk: ', value);
};
const CheckOut: React.FC = () => {
    return ( 
        <>
<div className="flex justify-center h-auto md:h-20">
  <div className="rounded-lg bg-white w-10/12 shadow-lg md:w-11/12 lg:w-10/12 xl:w-10/12 grid grid-cols-1 md:grid-cols-6 items-center md:gap-4 mx-auto z-10 -mt-24 md:-mt-20">
  <div className='flex md:justify-normal justify-center md:col-span-1'>
      <div className='flex justify-center md:justify-start'>
        <div className="container mx-auto p-4">
      <h1 className=" font-bold">Check in</h1>
       <CustomDatePicker selectedDate={new Date()} onChange={handleDateChange} />
     </div>
      </div>
  </div>
  
    <div className='flex md:justify-normal justify-center md:col-span-1 md:ml-2'>
        <div className='flex justify-center md:justify-start'>
            <div className="container mx-auto p-4">
          <h1 className=" font-bold ">Check out</h1>
          <CustomDatePicker selectedDate={new Date()} onChange={handleDateChange} />
        </div>
        </div>
    </div>

    <div className='flex md:justify-normal justify-center md:col-span-1 md:ml-2'>
        <div className='flex justify-center md:justify-start'>
            <div className="container mx-auto p-4">
            <Dropdown />
        </div>
        </div>
    </div>



    <div className='flex md:justify-normal justify-center md:col-span-1 md:ml-2'>
        <div className='flex justify-center md:justify-start'>
            <div className="container mx-auto p-4">
            <RoomType />
        </div>
        </div>
    </div>

    <Select
    id="countries"
    required
    style={{
      borderRadius: "0.25rem", // Adjust the border radius value as needed
      paddingTop: "1.1rem", // Adjust the padding value as needed
      paddingBottom: "1.1rem", // Adjust the padding value as needed
      border: "1px solid #EAB319", // Replace "yellow" with your preferred color
    }}
    onChange={handleSelectRoom}
  >
    {hotels.map((item:any) => (    
    <option>{item.category}</option>
    ))}

  </Select>

  
  


    <div className='flex md:justify-normal justify-center md:col-span-1 md:ml-2'>
        <div className='flex justify-center md:justify-start'>
            <div className="container mx-auto p-4">
              <Link href='/checkout'>
                <button className='py-3 rounded-md md:px-8 px-20 bg-yellow-500 text-white mt-4'>Checkout</button>
              </Link>
        </div>
        </div>
    </div>
      {/* <div className="container p-4 mx-auto">
          <Dropdown />
      </div>
        
      <div className="container p-4 mx-auto">
          <RoomType />
      </div>

      <div className="container p-4 mx-auto">
          <RoomType />
      </div> */}
  </div>
</div>


        </>
     );
}
 
export default CheckOut;