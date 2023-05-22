import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const CustomDatePicker = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleDateChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      className="border px-4 py-2 rounded-md border-custom-blue w-full text-center"
    />
  );
};

export default CustomDatePicker;