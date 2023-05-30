import React, { useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField, TextFieldProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers'

const BookingDate: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Select a date"
          value={selectedDate}
          onChange={handleDateChange}
        //   renderInput={(params: TextFieldProps) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default BookingDate;
