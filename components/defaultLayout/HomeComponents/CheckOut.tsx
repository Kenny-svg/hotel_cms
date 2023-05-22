import React from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import 'react-datepicker/dist/react-datepicker.css';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import  Dropdown  from '../HomeComponents/DropDown'
import RoomType from '../HomeComponents/RoomType'
import CustomDatePicker from '../HomeComponents/gallery/DatePicker'
import Btn from '@/components/utils/Btn';



// const items: MenuProps['items'] = [
//     {
//       label:"Person 1",
//       key: '0',
//     },
//     {
//       label:" Person 2",
//       key: '1',
//     },
//     {
//       type: 'divider',
//     },
   
//   ];

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

    <div className='flex md:justify-normal justify-center md:col-span-1 md:ml-2'>
        <div className='flex justify-center md:justify-start'>
          
            <div className="container mx-auto p-4">
          <h1 className="font-bold">Room numbers</h1>

            <input
              className=" lg:w-36 text-sm text-gray-700 focus:outline-none focus:border-blue-500 w-full md:w-auto border border-custom-blue py-2 px-8 md:px-8 rounded inline-flex items-center"
              type="number"
              placeholder="Enter a number"
            />
        </div>
        </div>
    </div>


    <div className='flex md:justify-normal justify-center md:col-span-1 md:ml-2'>
        <div className='flex justify-center md:justify-start'>
            <div className="container mx-auto p-4">
            <button className='py-3 rounded-md md:px-8 px-20 bg-yellow-500 text-white mt-4'>Book</button>
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