import React from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';


const onChange = (
  value: DatePickerProps['value'] | RangePickerProps['value'],
  dateString: [string, string] | string,
) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
  console.log('onOk: ', value);
};
const CheckOut: React.FC = () => {
    return ( 
        <>
        <div className="flex justify-center">
            <div className="rounded-full bg-white w-10/12 md:w-10/12 grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto absolute z-10 -mt-10">
                <div className='ml-5'>
                    <h3 className=''>Check in</h3>
                <Space direction="vertical" size={12}>
                    <DatePicker showTime onChange={onChange} onOk={onOk} />
                </Space>
                </div>
                <div className='ml-5'>
                    <h3 >Check out</h3>
                <Space direction="vertical" size={12}>
                    <DatePicker showTime onChange={onChange} onOk={onOk} />
                </Space>
                </div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>

        </>
     );
}
 
export default CheckOut;