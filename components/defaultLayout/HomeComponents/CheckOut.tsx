import React from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">Person 1</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">Person 2</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
   
  ];

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
<div className="flex justify-center h-auto md:h-20">
  <div className="rounded-lg bg-white w-full md:w-11/12 lg:w-10/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-5 items-center gap-4 mx-auto z-10 -mt-24 md:-mt-20">
    <div className='col-span-2 md:col-span-1 ml-5'>
      <h3 className='text-center md:text-left'>Check in</h3>
      <div className='flex justify-center md:justify-start'>
        <Space direction="vertical" size={12}>
          <DatePicker showTime onChange={onChange} onOk={onOk} dropdownClassName="responsive-datepicker" />
        </Space>
      </div>
    </div>
    <div className='col-span-2 md:col-span-1 ml-5'>
      <h3 className='text-center md:text-left'>Check out</h3>
      <div className='flex justify-center md:justify-start'>
        <Space direction="vertical" size={12} >
          <DatePicker showTime onChange={onChange} onOk={onOk} dropdownClassName="responsive-datepicker" />
        </Space>
      </div>
    </div>
    <div className='col-span-2 md:col-span-1 ml-5'>
      <h3 className='text-center md:text-left'>Persons</h3>
      <div className='flex justify-center md:justify-start'>
        <Dropdown className='border-2 rounded-md' menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <p className='text-sm'>Person</p>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  </div>
</div>


        </>
     );
}
 
export default CheckOut;